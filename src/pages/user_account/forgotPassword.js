import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Alert, Box, Button, LinearProgress, Snackbar, TextField, Typography, } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { forgotPassword, resetPassword } from "../../services/apiService";
import { LockOpen, Mail } from "@mui/icons-material";
export function ForgotPasswordForm() {
    const { handleSubmit, control, formState, formState: { errors }, getValues, } = useForm();
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [showPinForm, setShowPinForm] = useState(false);
    const [emailForMessage, setEmailForMessage] = useState(""); // Initialize to an empty string
    const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);
    const [resetCodeSent, setResetCodeSent] = useState(false); // State to track if reset code is sent
    const [newPassword, setNewPassword] = useState(""); // State to hold new password
    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsSubmitting(true);
            if (!showPinForm) {
                // Step 1: Request PIN
                await forgotPassword(data.email);
                setShowPinForm(true);
                setError(null);
                setEmailForMessage(data.email); // Set the email for the message
                setResetCodeSent(true);
                setNewPassword(data.newPassword); // Set the new password for validation
            }
            else {
                // Step 3: Reset Password
                await resetPassword(data.email, data.pin, data.newPassword);
                setError(null);
                setPasswordResetSuccess(true);
                setShowPinForm(false);
            }
        }
        catch (err) {
            setError(err?.error?.message);
            if (err?.error?.message === undefined) {
                setError("internet connection error");
            }
            setSnackbarOpen(true);
        }
        finally {
            setIsSubmitting(false);
        }
    });
    return (_jsxs(Box, { children: [_jsxs("form", { onSubmit: onSubmit, children: [_jsx(Controller, { name: "email", control: control, defaultValue: "", rules: {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                            },
                        }, render: ({ field }) => (_jsx(TextField, { ...field, label: "Email", variant: "outlined", fullWidth: true, margin: "dense", error: !!errors.email, helperText: errors.email?.message, disabled: showPinForm })) }), showPinForm ? (_jsxs(_Fragment, { children: [_jsx(Controller, { name: "pin", control: control, 
                                // defaultValue={0}
                                rules: {
                                    required: "PIN is required",
                                    validate: {
                                        validPin: (value) => !isNaN(value) || "Invalid PIN",
                                    },
                                }, render: ({ field }) => (_jsx(TextField, { ...field, label: "PIN", variant: "outlined", fullWidth: true, margin: "dense", error: !!errors.pin, helperText: errors.pin?.message })) }), _jsx(Controller, { name: "newPassword", control: control, defaultValue: "", rules: {
                                    required: "New password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters long",
                                    },
                                }, render: ({ field }) => (_jsx(TextField, { ...field, label: "New Password", type: "password", variant: "outlined", fullWidth: true, margin: "dense", error: !!errors.newPassword, helperText: errors.newPassword?.message })) }), _jsx(Controller, { name: "verifyPassword", control: control, defaultValue: "", rules: {
                                    required: "Please verify your new password",
                                    validate: {
                                        passwordMatch: (value) => value === getValues("newPassword") ||
                                            "Passwords do not match",
                                    },
                                }, render: ({ field }) => (_jsx(TextField, { ...field, label: "Verify Password", type: "password", variant: "outlined", fullWidth: true, margin: "dense", error: !!errors.verifyPassword, helperText: errors.verifyPassword?.message })) })] })) : null, _jsx(Button, { type: "submit", variant: "contained", style: { borderRadius: "0px", marginTop: "20px" }, fullWidth: true, startIcon: showPinForm ? _jsx(LockOpen, {}) : _jsx(Mail, {}), disabled: isSubmitting, children: isSubmitting ? (_jsx(Box, { width: "100%", children: _jsx(LinearProgress, { color: "primary" }) })) : showPinForm ? ("Reset Password") : ("Forgot Password") })] }), _jsx(Snackbar, { open: snackbarOpen || passwordResetSuccess, autoHideDuration: 6000, onClose: () => setSnackbarOpen(false), message: error, children: passwordResetSuccess ? (_jsx(Alert, { severity: "success", children: "Password reset successful!" })) : (_jsx(Alert, { severity: "error", children: `${error}` })) }), resetCodeSent && (_jsxs(Typography, { variant: "body2", color: "textSecondary", padding: 1, fontWeight: "bolder", children: ["Reset code has been sent to your email: ", emailForMessage] }))] }));
}
