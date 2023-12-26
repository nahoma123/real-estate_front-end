import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Alert, Box, Button, LinearProgress, Snackbar, TextField, Typography, } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { changePassword, } from "../../services/apiService";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export function ChangePassword() {
    const { handleSubmit, control, formState, formState: { errors }, getValues, } = useForm();
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsSubmitting(true);
            await changePassword(data.newPassword);
            setError(null);
            setPasswordResetSuccess(true);
        }
        catch (error) {
            setError(error?.error?.message);
            setSnackbarOpen(true);
        }
        finally {
            setIsSubmitting(false);
        }
    });
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };
    return (_jsxs(Box, { children: [_jsx(Button, { type: "submit", variant: "contained", onClick: () => logout(), style: { borderRadius: "0px", marginTop: "20px", marginBottom: "40px" }, fullWidth: true, startIcon: _jsx(Logout, {}), children: "Log Out" }), _jsx(Typography, { variant: "h5", textAlign: "center", m: 2, fontWeight: "bolder", children: "Change password" }), _jsxs("form", { onSubmit: onSubmit, children: [_jsxs(_Fragment, { children: [_jsx(Controller, { name: "newPassword", control: control, defaultValue: "", rules: {
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
                                }, render: ({ field }) => (_jsx(TextField, { ...field, label: "Verify Password", type: "password", variant: "outlined", fullWidth: true, margin: "dense", error: !!errors.verifyPassword, helperText: errors.verifyPassword?.message })) })] }), _jsx(Button, { type: "submit", variant: "contained", style: { borderRadius: "0px", marginTop: "20px" }, fullWidth: true, startIcon: _jsx(ChangeCircleIcon, {}), disabled: isSubmitting, children: isSubmitting ? (_jsx(Box, { width: "100%", children: _jsx(LinearProgress, { color: "primary" }) })) : ("Change Password") })] }), _jsx(Snackbar, { open: snackbarOpen || passwordResetSuccess, autoHideDuration: 6000, onClose: () => setSnackbarOpen(false), message: error, children: passwordResetSuccess ? (_jsx(Alert, { severity: "success", children: "Password reset successful!" })) : (_jsx(Alert, { severity: "error", children: `${error}` })) })] }));
}
