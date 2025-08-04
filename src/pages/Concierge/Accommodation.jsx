// Libraries
import { useState } from "react";
import styled from "styled-components";
import { Dialog } from "@mui/material";

// Image
import Img1 from "../../images/concierge/Img1.png";

// Styles
const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  color: #ffd387;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Img = styled.img`
  width: 45%;
  height: 300px;
  border-radius: 30px;
  border: 2px solid #b3935c;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || "22px"};
  margin: ${({ $margin }) => $margin || "0"};
  text-align: ${({ $textAlign }) => $textAlign || ""};
  width: ${({ $width }) => $width || ""};
  font-weight: 400;
`;

const Button = styled.button`
  width: 220px;
  height: 55px;
  border: 1px solid #d6c8a6;
  background-color: transparent;
  color: #ffd387;
  border-radius: 15px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;
  &:hover {
    background-color: #d6c8a6;
    color: #000;
  }
`;

const DialogWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 30px;
  background: #000;
  color: #ffd387;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 2px solid #ffd387;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-bottom: 15px;
`;

const FullWidth = styled.div`
  grid-column: 1 / -1;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #b3935c;
  background: transparent;
  color: #fff;
  font-size: 14px;
  width: ${({ $width }) => $width || ""};
  &::placeholder {
    color: #d6c8a6;
  }
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #b3935c;
  background: #000;
  color: #fff;
  font-size: 14px;
  option {
    border: 1px solid #b3935c;
    padding: 6px 0;
  }
`;

const Accommodation = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    checkIn: "",
    checkOut: "",
    stayType: "",
    location: "",
    special: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, checkIn, checkOut, stayType, location } = formData;
    if (!(fullName && email && checkIn && checkOut && stayType && location)) {
      alert("Please fill all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <Wrapper>
      <Card>
        <Img src={Img1} onClick={() => setOpen(true)} />
        <Content>
          <P $fontSize="50px">Accommodation Reservations</P>
          <P $margin="25px 0">
            Tailored stays in Japan’s finest ryokans, villas, and penthouses — selected to match your pace, taste, and privacy.
          </P>
          <Button onClick={() => setOpen(true)}>Request a Stay</Button>
        </Content>
      </Card>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth={false}
        PaperProps={{
          style: {
            width: "800px",
            borderRadius: "20px",
            background: "black",
          },
        }}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <DialogWrapper>
          <P $fontSize="60px">Request a Stay</P>
          <P $fontSize="25px" $width="514px" $textAlign="center" $margin="20px 0">
            Let us know your preferences – we’ll craft the perfect stay for you.
          </P>

          {submitted ? (
            <P $fontSize="30px" $margin="40px 0">
              ✅ Thank you! We'll get back to you.
            </P>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
              <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
              <Input name="checkIn" type="date" value={formData.checkIn} onChange={handleChange} required />
              <Input name="checkOut" type="date" value={formData.checkOut} onChange={handleChange} required />
              <Select name="stayType" value={formData.stayType} onChange={handleChange} required>
                <option value="" disabled>Select Stay Type</option>
                <option value="ryokan">Ryokan</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
              </Select>
              <Select name="location" value={formData.location} onChange={handleChange} required>
                <option value="" disabled>Select Location</option>
                <option value="tokyo">Tokyo</option>
                <option value="kyoto">Kyoto</option>
                <option value="osaka">Osaka</option>
              </Select>
              <FullWidth>
                <Input
                  name="special"
                  value={formData.special}
                  onChange={handleChange}
                  placeholder="Special Requests (Optional)"
                  $width="100%"
                />
              </FullWidth>
              <Button type="submit" $margin="20px auto 0 auto">Submit Request</Button>
            </Form>
          )}
        </DialogWrapper>
      </Dialog>
    </Wrapper>
  );
};

export default Accommodation;