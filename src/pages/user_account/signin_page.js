import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { LoginForm } from "./signin_form";
import { RegisterForm } from "./register";
import { ForgotPasswordForm } from "./forgotPassword";
import FlexibleImgComponent from "../../components/presentational/image/flexible_img";
// import { ForgotPassword } from "./ForgotPassword";
import ProfileIcon from "../../assets/images/user_profile.png";
import { getSignedUser, isSignedIn } from "../../utils/credentials";
import { ChangePassword } from "./changePassword";
const AuthContainer = () => {
    const [activeForm, setActiveForm] = useState("login");
    const handleFormChange = (form) => {
        setActiveForm(form);
    };
    return (_jsx(Box, { children: _jsxs(Grid, { container: true, justifyContent: "center", alignItems: "center", spacing: 2, children: [_jsx(Grid, { item: true, xs: 12, display: "flex", justifyContent: "center", children: _jsx(FlexibleImgComponent, { imageUrl: ProfileIcon, alt: "Profile Icon", style: { height: "90px" } }) }), _jsxs(Grid, { item: true, xs: 12, md: 6, children: [_jsx(Box, { paddingTop: 2, paddingBottom: 2, margin: 1, children: _jsx(Typography, { sx: { fontWeight: "bold" }, variant: "h4", align: "center", gutterBottom: true, children: !isSignedIn()
                                    ? "Welcome to our FreeLets!"
                                    : `Hello ${getSignedUser()?.first_name} ${getSignedUser()?.last_name}` }) }), !isSignedIn() ? (_jsxs(_Fragment, { children: [_jsxs(Box, { margin: 3, marginTop: 1, children: [activeForm === "login" && _jsx(LoginForm, {}), activeForm === "register" && _jsx(RegisterForm, {}), activeForm === "forgotPassword" && _jsx(ForgotPasswordForm, {})] }), _jsxs(Box, { margin: 3, display: "flex", justifyContent: "space-between", children: [activeForm !== "login" && (_jsx(Button, { variant: "text", color: "primary", sx: {
                                                fontSize: "initial",
                                                textTransform: "none",
                                                backgroundColor: "transparent",
                                                color: "black",
                                                cursor: "pointer",
                                            }, style: {
                                                backgroundColor: "transparent",
                                                color: "black",
                                                cursor: "pointer",
                                            }, onClick: () => handleFormChange("login"), children: "Back to Login" })), activeForm !== "register" && (_jsx(Button, { variant: "text", sx: {
                                                fontSize: "initial",
                                                textTransform: "none",
                                                backgroundColor: "transparent",
                                                color: "black",
                                                cursor: "pointer",
                                            }, style: {
                                                backgroundColor: "transparent",
                                                color: "black",
                                                cursor: "pointer",
                                            }, onClick: () => handleFormChange("register"), children: "Don't have an account? Register here." })), activeForm !== "forgotPassword" && (_jsx(Button, { variant: "text", color: "primary", sx: {
                                                fontSize: "initial",
                                                textTransform: "none",
                                                backgroundColor: "transparent",
                                                color: "black",
                                                cursor: "pointer",
                                            }, style: {
                                                backgroundColor: "transparent",
                                                color: "black",
                                                cursor: "pointer",
                                            }, onClick: () => handleFormChange("forgotPassword"), children: "Forgot Password" }))] })] })) : (_jsx(Box, { children: _jsx(ChangePassword, {}) }))] })] }) }));
};
export { AuthContainer };
