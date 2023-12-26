import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Alert, Box, Button, Checkbox, CircularProgress, Grid, MenuItem, Snackbar, Typography, } from "@mui/material";
import { useForm } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextFieldWithValidation from "../../components/common/TextFieldWithValidation";
import DateTimePickerWithValidation from "../../components/common/DateTimePicker";
import { validationRules } from "../../utils/validationRules";
import { submitBookingRequest } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
const BookValuationRegistration = () => {
    const { handleSubmit, control } = useForm();
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        let address = sessionStorage.getItem("address");
        if (address == null) {
            setAddress("");
        }
        else {
            setAddress(address);
        }
    }, []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // State variable for error message
    const [isSuccess, setIsSuccess] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false); // State variable for snackbar visibility
    const [fieldError, setFieldError] = useState(null); // State variable for field error message
    const onSubmit = handleSubmit(async (data) => {
        try {
            setLoading(true);
            let time = data.selectedDateTime?.toISOString();
            sessionStorage.setItem("selected_datetime", time === undefined ? "" : time);
            let bookingRequest = {
                address: address,
                why_joined: parseInt(data.status),
                full_name: data.fullName,
                email: data.email,
                phone_number: data.phoneNumber,
                preferred_time: time,
            };
            await submitBookingRequest(bookingRequest);
            setIsSuccess(true);
            navigate("/book_valuation_registration_confirmation");
        }
        catch (error) {
            // Handle registration error (e.g., display error message)
            console.log("-Error-");
            // console.log(error.response?.data); // Log the response data
            if (error?.error?.field_error) {
                // If field errors are present
                const fieldErrors = error.error.field_error;
                const firstFieldError = fieldErrors[0]; // Get the first field error
                setFieldError(`${firstFieldError.name}: ${firstFieldError.description}`); // Set the field error message
                setSnackbarOpen(true); // Open the snackbar
            }
            else {
                setError(error?.error?.message); // Set the general error message
                setSnackbarOpen(true); // Open the snackbar
            }
        }
        finally {
            setLoading(false);
        }
    });
    return (_jsxs(Box, { children: [_jsx(Grid, { container: true, justifyContent: "center", alignItems: "center", spacing: 2, children: _jsxs(Grid, { item: true, sm: 6, children: [_jsx(Box, { paddingTop: 5, paddingBottom: 2, margin: 3, children: _jsxs(Grid, { justifyContent: "left", children: [_jsx(Typography, { sx: { fontWeight: "bold" }, variant: "h3", align: "left", gutterBottom: true, children: "Let's value your home" }), _jsx(Typography, { variant: "h5", align: "left", style: { display: "inline" }, children: "Book a no-obligation home valuation with our FreeLets agent:" })] }) }), _jsx(Box, { margin: 3, children: _jsxs("form", { onSubmit: onSubmit, children: [_jsx(TextFieldWithValidation, { fullWidth: true, name: "fullName", control: control, defaultValue: "", label: "Full Name", rules: validationRules.fullName }), _jsx(TextFieldWithValidation, { fullWidth: true, name: "email", control: control, rules: validationRules.email, defaultValue: "", label: "Email Address", type: "email" }), _jsx(TextFieldWithValidation, { fullWidth: true, name: "phoneNumber", control: control, defaultValue: "", label: "Phone Number", rules: validationRules.phoneNumber, type: "tel" }), _jsxs(TextFieldWithValidation, { fullWidth: true, name: "status", control: control, defaultValue: "", rules: validationRules.select, label: "Which best describes your status?", select: true, children: [_jsx(MenuItem, { value: "1", children: "I'm ready to list with FreeLets" }), _jsx(MenuItem, { value: "2", children: "I want to learn more about FreeLets" }), _jsx(MenuItem, { value: "3", children: "I'm not sure if I'm ready to sell yet" }), _jsx(MenuItem, { value: "4", children: "Just curious about value" })] }), _jsx(Box, { width: "100%", marginTop: 2, children: _jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: _jsx(DateTimePickerWithValidation, { rules: validationRules.basic, control: control, name: "selectedDateTime", label: "Preferred Call Date and Time" }) }) }), _jsx(Box, { marginTop: 2, marginBottom: 2, children: _jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx(Checkbox
                                                // checked={termsAccepted}
                                                // onChange={handleTermsAcceptedChange}
                                                , { 
                                                    // checked={termsAccepted}
                                                    // onChange={handleTermsAcceptedChange}
                                                    required: true }), _jsx(Typography, { variant: "body2", children: "I accept the terms and conditions." })] }) }), _jsx(Button, { type: "submit", variant: "contained", fullWidth: true, style: { borderRadius: 0, marginTop: 20 }, disabled: loading, children: loading ? (_jsx(Box, { width: "100%", children: _jsx(CircularProgress, { color: "primary" }) })) : ("Submit") })] }) })] }) }), _jsx(Snackbar, { open: snackbarOpen, autoHideDuration: 6000, onClose: () => setSnackbarOpen(false), message: error, children: _jsx(Alert, { severity: "error", children: `${error}` }) }), _jsx(Snackbar, { open: isSuccess, autoHideDuration: 6000, onClose: () => setIsSuccess(false), message: "Registered successfully", children: _jsx(Alert, { severity: "success", children: "Registered successfully!" }) }), _jsx(Snackbar, { open: snackbarOpen, autoHideDuration: 6000, onClose: () => setSnackbarOpen(false), message: error || fieldError, children: _jsx(Alert, { severity: "error", children: error || fieldError }) })] }));
};
export { BookValuationRegistration };
