// Libraries
import { useState } from "react";
import styled from "styled-components";
import { Dialog } from "@mui/material";

// Image
import Img3  from "../../images/concierge/Img4.png";

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

const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #b3935c;
  background: #000;
  color: #fff;
  font-size: 14px;
  width: 100%;
  option {
    border: 1px solid #b3935c;
    padding: 6px 0;
  }
`;

const Transport = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    pickupDate: "",
    pickupTime: "",
    pickupLocation: "",
    dropoffLocation: "",
    vehicleType: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, phone, pickupDate, pickupTime, pickupLocation, dropoffLocation, vehicleType } = formData;
    if (!(fullName && phone && pickupDate && pickupTime && pickupLocation && dropoffLocation && vehicleType)) {
      alert("Please fill all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <Wrapper>
      <Card>
        <Img src={Img3} alt="transport" onClick={() => setOpen(true)} />
        <Content>
          <P $fontSize="50px">Luxury Transport</P>
          <P $margin="25px 0">
            Book a luxury ride for business or leisure. Enjoy comfort and style wherever you go.
          </P>
          <Button onClick={() => setOpen(true)}>Book Ride</Button>
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
          <P $fontSize="60px">Book a Ride</P>
          <P $fontSize="25px" $width="514px" $textAlign="center" $margin="20px 0">
            Fill in the details and we'll send a luxury vehicle to your door.
          </P>

          {submitted ? (
            <P $fontSize="30px" $margin="40px 0">✅ Your transport booking is confirmed!</P>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
              <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              <Input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} />
              <Input type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} />
              <Input name="pickupLocation" placeholder="Pickup Location" value={formData.pickupLocation} onChange={handleChange} />
              <Input name="dropoffLocation" placeholder="Drop-off Location" value={formData.dropoffLocation} onChange={handleChange} />
              <Select name="vehicleType" value={formData.vehicleType} onChange={handleChange}>
                <option value="" disabled>Select Vehicle Type</option>
                <option value="limousine">Limousine</option>
                <option value="suv">SUV</option>
                <option value="sedan">Sedan</option>
                <option value="van">Luxury Van</option>
              </Select>
              <FullWidth>
                <Input
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Special Requests (Optional)"
                />
              </FullWidth>
              <FullWidth>
                <Button type="submit">Confirm Booking</Button>
              </FullWidth>
            </Form>
          )}
        </DialogWrapper>
      </Dialog>
    </Wrapper>
  );
};

export default Transport;