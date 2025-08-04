// Libraries
import { useState } from "react";
import styled from "styled-components";
import { Dialog } from "@mui/material";

// Image
import Img5 from "../../images/concierge/Img6.jpg";
// Styled Components
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
  gap: 15px;
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
  width: ${({ $width }) => $width || "100%"};
  &::placeholder {
    color: #d6c8a6;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #b3935c;
  background: transparent;
  color: #fff;
  font-size: 14px;
  resize: none;
  width: 100%;
  height: 80px;
  &::placeholder {
    color: #d6c8a6;
  }
`;

// Main Component
const TourGuide = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    destination: "",
    language: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, phone, email, destination, language } = formData;
    if (!(fullName && phone && email && destination && language)) {
      alert("Please fill all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <Wrapper>
      <Card>
        <Img src={Img5} alt="Tour Guide" onClick={() => setOpen(true)} />
        <Content>
          <P $fontSize="50px">Tour Guide</P>
          <P $margin="25px 0">
            Explore with confidence! Book a local guide to enrich your travel experience.
          </P>
          <Button onClick={() => setOpen(true)}>Book a Tour Guide</Button>
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
          <P $fontSize="60px">Tour Guide Booking</P>
          <P $fontSize="25px" $width="514px" $textAlign="center" $margin="20px 0">
            Tell us your destination and preferred language — we'll connect you with the best guide!
          </P>

          {submitted ? (
            <P $fontSize="30px" $margin="40px 0">✅ Your guide request has been received!</P>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
              <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              <Input name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
              <Input name="destination" placeholder="Travel Destination" value={formData.destination} onChange={handleChange} />
              <Input name="language" placeholder="Preferred Language (e.g. English, Japanese)" value={formData.language} onChange={handleChange} />
              <FullWidth>
                <TextArea name="additionalNotes" placeholder="Additional Notes (Optional)" value={formData.additionalNotes} onChange={handleChange} />
              </FullWidth>
              <FullWidth>
                <Button type="submit">Submit Request</Button>
              </FullWidth>
            </Form>
          )}
        </DialogWrapper>
      </Dialog>
    </Wrapper>
  );
};

export default TourGuide;