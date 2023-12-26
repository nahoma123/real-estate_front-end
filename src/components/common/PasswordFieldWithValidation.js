import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
const PasswordFieldWithValidation = ({ name, control, defaultValue, rules, label, }) => {
    return (_jsx(Controller, { name: name, control: control, defaultValue: defaultValue, rules: rules, render: ({ field, fieldState: { error } }) => (_jsx(TextField, { ...field, label: label, type: "password", variant: "outlined", fullWidth: true, margin: "dense", error: !!error, helperText: error?.message })) }));
};
export default PasswordFieldWithValidation;
