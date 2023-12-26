import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LockOpen } from "@mui/icons-material";
import { Box, Button, LinearProgress } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../services/apiService";
import TextFieldWithValidation from "../../components/common/TextFieldWithValidation";
import PasswordFieldWithValidation from "../../components/common/PasswordFieldWithValidation";
import ErrorSnackbar from "../../components/common/ErrorSnackbar";
import { validationRules } from "../../utils/validationRules";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
    const { handleSubmit, control, } = useForm();
    const [error, setError] = useState(null); // State variable for error message
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false); // State variable for snackbar visibility
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsSubmitting(true);
            const responseData = await loginUser(data?.email, data?.password);
            localStorage.setItem("token", responseData?.data?.token);
            localStorage.setItem("user", JSON.stringify(responseData?.data?.user));
            if (responseData?.data?.user?.role === "ADMIN_ROLE") {
                navigate("/admin_dashboard/valuations", { replace: true });
            }
            else {
                navigate("/landlord_tenant/dashboard", { replace: true });
            }
        }
        catch (err) {
            console.log(err);
            setError(err?.error?.message); // Set the error message
            if (err?.error?.message === undefined) {
                setError("internet connection error");
            }
            setSnackbarOpen(true); // Open the snackbar
        }
        finally {
            setIsSubmitting(false);
        }
    });
    return (_jsxs(Box, { children: [_jsxs("form", { onSubmit: onSubmit, children: [_jsx(TextFieldWithValidation, { name: "email", control: control, defaultValue: "", rules: validationRules.email, label: "Email", fullWidth: true }), _jsx(PasswordFieldWithValidation, { name: "password", control: control, defaultValue: "", rules: validationRules.password, label: "Password" }), _jsx(Button, { type: "submit", variant: "contained", style: { borderRadius: "0px", marginTop: "20px" }, fullWidth: true, startIcon: _jsx(LockOpen, {}), disabled: isSubmitting, children: isSubmitting ? (_jsx(Box, { width: "100%", children: _jsx(LinearProgress, { color: "primary" }) })) : ("Login") })] }), _jsx(ErrorSnackbar, { open: snackbarOpen, onClose: () => setSnackbarOpen(false), message: error })] }));
};
export { LoginForm };
