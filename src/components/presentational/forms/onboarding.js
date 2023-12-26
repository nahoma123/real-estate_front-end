import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { FormControl, InputLabel, Select, MenuItem, Button, } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
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
const BookingForm = () => {
    const [postcode, setPostcode] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const handlePostcodeChange = (event) => {
        setPostcode(event.target.value);
    };
    const handleBedroomsChange = (event) => {
        setBedrooms(event.target.value);
    };
    const handleDateTimeChange = (value) => {
        setSelectedDateTime(value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        console.log("Form submitted:", {
            postcode,
            bedrooms,
            selectedDateTime,
        });
    };
    return (_jsxs(FormContainer, { onSubmit: handleSubmit, children: [_jsxs(LocalizationProvider, { dateAdapter: AdapterDayjs, children: [_jsxs(FormControlWrapper, { children: [_jsx(InputLabel, { children: "Property Postcode" }), _jsxs(Select, { value: postcode, onChange: handlePostcodeChange, required: true, children: [_jsx(MenuItem, { value: "", children: "Select" }), _jsx(MenuItem, { value: "postcode1", children: "11223" }), _jsx(MenuItem, { value: "postcode2", children: "11523" })] })] }), _jsxs(FormControlWrapper, { children: [_jsx(InputLabel, { children: "Number of Bedrooms" }), _jsxs(Select, { value: bedrooms, onChange: handleBedroomsChange, required: true, children: [_jsx(MenuItem, { value: "", children: "Select" }), _jsx(MenuItem, { value: "1", children: "1 bedroom" }), _jsx(MenuItem, { value: "2", children: "2 bedrooms" }), _jsx(MenuItem, { value: "3", children: "3 bedrooms" }), _jsx(MenuItem, { value: "4", children: "4 bedrooms" }), _jsx(MenuItem, { value: "5", children: "5 or more bedrooms" })] })] }), _jsx(FormControlWrapper, { children: _jsx(DateTimePicker, { label: "Preferred Call Date and Time", value: selectedDateTime, onChange: handleDateTimeChange }) })] }), _jsx(SubmitButton, { variant: "contained", color: "primary", type: "submit", children: "Book Onboarding Call" })] }));
};
export default BookingForm;
