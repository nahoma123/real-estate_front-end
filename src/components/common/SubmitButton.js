import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Button, LinearProgress } from "@mui/material";
const SubmitButton = ({ isSubmitting }) => {
    return (_jsx(Button, { type: "submit", variant: "contained", style: { borderRadius: "0px", marginTop: "20px" }, fullWidth: true, disabled: isSubmitting, children: isSubmitting ? (_jsx(Box, { width: "100%", children: _jsx(LinearProgress, { color: "primary" }) })) : ("Login") }));
};
export default SubmitButton;
