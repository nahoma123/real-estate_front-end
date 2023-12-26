import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DateTimePicker } from "@mui/x-date-pickers";
import { SelectChangeEvent } from "@mui/material/Select";

const FormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  margin: "0 auto",
});

const FormControlWrapper = styled(FormControl)({
  marginBottom: "16px",
});

const SubmitButton = styled(Button)({
  marginTop: "16px",
});

const BookingForm: React.FC = () => {
  const [postcode, setPostcode] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  const handlePostcodeChange = (event: SelectChangeEvent<string>) => {
    setPostcode(event.target.value);
  };

  const handleBedroomsChange = (event: SelectChangeEvent<string>) => {
    setBedrooms(event.target.value);
  };

  const handleDateTimeChange = (value: Date | null) => {
    setSelectedDateTime(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted:", {
      postcode,
      bedrooms,
      selectedDateTime,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormControlWrapper>
          <InputLabel>Property Postcode</InputLabel>
          <Select value={postcode} onChange={handlePostcodeChange} required>
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="postcode1">11223</MenuItem>
            <MenuItem value="postcode2">11523</MenuItem>
            {/* Add more menu items as needed */}
          </Select>
        </FormControlWrapper>
        <FormControlWrapper>
          <InputLabel>Number of Bedrooms</InputLabel>
          <Select value={bedrooms} onChange={handleBedroomsChange} required>
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="1">1 bedroom</MenuItem>
            <MenuItem value="2">2 bedrooms</MenuItem>
            <MenuItem value="3">3 bedrooms</MenuItem>
            <MenuItem value="4">4 bedrooms</MenuItem>
            <MenuItem value="5">5 or more bedrooms</MenuItem>
          </Select>
        </FormControlWrapper>
        <FormControlWrapper>
          <DateTimePicker
            label="Preferred Call Date and Time"
            value={selectedDateTime}
            onChange={handleDateTimeChange}
          />
        </FormControlWrapper>
      </LocalizationProvider>
      <SubmitButton variant="contained" color="primary" type="submit">
        Book Onboarding Call
      </SubmitButton>
    </FormContainer>
  );
};

export default BookingForm;
