import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Login } from "@mui/icons-material";
import { Alert, Box, Button, Grid, LinearProgress, Snackbar, TextField, } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { registerUser } from "../../services/apiService";
export function RegisterForm() {
    const { handleSubmit, control, formState: { errors }, watch, } = useForm();
    const [error, setError] = useState(null); // State variable for error message
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false); // State variable for snackbar visibility
    const [fieldError, setFieldError] = useState(null); // State variable for field error message
    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsSubmitting(true);
            // Call the API service to register the user
            await registerUser({
                email: data.email,
                password: data.password,
                phone: data.phone,
                first_name: data.first_name,
                middle_name: data.middle_name,
                last_name: data.last_name,
            });
            // Handle successful registration (e.g., show success message, redirect)
            console.log("Registration successful!");
            setIsSuccess(true);
        }
        catch (err) {
            // Handle registration error (e.g., display error message)
            console.log("-Error-");
            // console.log(error.response?.data); // Log the response data
            if (err?.error?.field_error) {
                // If field errors are present
                const fieldErrors = err.error.field_error;
                const firstFieldError = fieldErrors[0]; // Get the first field error
                console.log(err);
                setSnackbarOpen(true); // Open the snackbar
                setFieldError(`${firstFieldError.name}: ${firstFieldError.description}`); // Set the field error message
                setSnackbarOpen(true); // Open the snackbar
            }
            else {
                setSnackbarOpen(true); // Open the snackbar
            }
            setError(err?.error?.message); // Set the error message
            if (err?.error?.message === undefined) {
                setError("internet connection error");
            }
        }
        finally {
            setIsSubmitting(false);
        }
    });
    const password = watch("password");
    return (_jsxs(Box, { children: [_jsxs("form", { onSubmit: onSubmit, children: [_jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { item: true, xs: 12, sm: 4, children: _jsx(Controller, { name: "first_name", control: control, defaultValue: "", rules: {
                                        required: "First name is required",
                                    }, render: ({ field }) => (_jsx(TextField, { ...field, label: "First Name", variant: "outlined", fullWidth: true, margin: "dense", error: !!errors.first_name, helperText: errors.first_name?.message })) }) }), _jsx(Grid, { item: true, xs: 12, sm: 4, children: _jsx(Controller, { name: "middle_name", control: control, defaultValue: "", render: ({ field }) => (_jsx(TextField, { ...field, label: "Middle Name", variant: "outlined", fullWidth: true, margin: "dense" })) }) }), _jsx(Grid, { item: true, xs: 12, sm: 4, children: _jsx(Controller, { name: "last_name", control: control, defaultValue: "", rules: {
                                        required: "Last name is required",
                                    }, render: ({ field }) => (_jsx(TextField, { ...field, label: "Last Name", variant: "outlined", fullWidth: true, margin: "dense", error: !!errors.last_name, helperText: errors.last_name?.message })) }) })] }), _jsx(Controller, { name: "email", control: control, defaultValue: "", rules: {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                            },
                        }, render: ({ field }) => (_jsx(TextField, { ...field, label: "Email", variant: "outlined", fullWidth: true, margin: "dense", error: !!errors.email, helperText: errors.email?.message })) }), _jsx(Controller, { name: "password", control: control, defaultValue: "", rules: {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long",
                            },
                        }, render: ({ field }) => (_jsx(TextField, { ...field, label: "Password", type: "password", variant: "outlined", fullWidth: true, margin: "dense", error: !!errors.password, helperText: errors.password?.message })) }), _jsx(Controller, { name: "repeatPassword", control: control, defaultValue: "", rules: {
                            required: "Please repeat the password",
                            validate: (value) => value === password || "Passwords do not match",
                        }, render: ({ field }) => (_jsx(TextField, { ...field, label: "Repeat Password", type: "password", variant: "outlined", fullWidth: true, margin: "dense", error: !!errors.repeatPassword, helperText: errors.repeatPassword?.message })) }), _jsx(Controller, { name: "phone", control: control, defaultValue: "", rules: {
                            required: "Phone number is required",
                        }, render: ({ field }) => (_jsx(TextField, { ...field, label: "Phone Number", variant: "outlined", fullWidth: true, margin: "dense", error: !!errors.phone, helperText: errors.phone?.message })) }), _jsx(Button, { type: "submit", variant: "contained", style: { borderRadius: "0px", marginTop: "20px" }, fullWidth: true, startIcon: _jsx(Login, {}), disabled: isSubmitting, children: isSubmitting ? (_jsx(Box, { width: "100%", children: _jsx(LinearProgress, { color: "primary" }) })) : ("Register") })] }), _jsx(Snackbar, { open: snackbarOpen, autoHideDuration: 6000, onClose: () => setSnackbarOpen(false), message: error, children: _jsx(Alert, { severity: "error", children: `${error}` }) }), _jsx(Snackbar, { open: isSuccess, autoHideDuration: 6000, onClose: () => setIsSuccess(false), message: "Registered successfully", children: _jsx(Alert, { severity: "success", children: "Registered successfully!" }) }), _jsx(Snackbar, { open: snackbarOpen, autoHideDuration: 6000, onClose: () => setSnackbarOpen(false), message: error || fieldError, children: _jsx(Alert, { severity: "error", children: error || fieldError }) })] }));
}
