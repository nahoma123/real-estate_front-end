import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
const TextFieldWithValidation = ({ name, control, defaultValue, rules, label, children, ...props }) => {
    return (_jsx(Controller, { name: name, control: control, defaultValue: defaultValue, rules: rules, render: ({ field, fieldState: { error } }) => (_jsx(TextField, { ...field, label: label, variant: "outlined", margin: "dense", ...props, error: !!error, helperText: error?.message, children: children })) }));
};
export default TextFieldWithValidation;
