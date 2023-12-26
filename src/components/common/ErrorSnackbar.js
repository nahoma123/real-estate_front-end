import { jsx as _jsx } from "react/jsx-runtime";
import { Alert, Snackbar } from "@mui/material";
const ErrorSnackbar = ({ open, onClose, message, }) => {
    return (_jsx(Snackbar, { open: open, autoHideDuration: 6000, onClose: onClose, children: _jsx(Alert, { severity: "error", children: `${message}` }) }));
};
export default ErrorSnackbar;
