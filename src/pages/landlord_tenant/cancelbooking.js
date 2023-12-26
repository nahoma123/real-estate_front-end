import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { updateBookingRequest } from "../../services/apiService";
function CancelBookingDialog(props) {
    const { onClose, onCancel, open } = props;
    const handleClose = () => {
        onClose();
    };
    const handleCancel = () => {
        onCancel();
        onClose();
    };
    return (_jsxs(Dialog, { onClose: handleClose, open: open, children: [_jsx(DialogTitle, { children: "Cancel Valuation Booking" }), _jsx(Typography, { variant: "body1", component: "div", sx: { p: 2 }, children: "Are you sure you want to cancel your valuation booking?" }), _jsx(Button, { onClick: handleCancel, variant: "contained", color: "error", sx: { m: 2 }, children: "Cancel Booking" }), _jsx(Button, { onClick: handleClose, variant: "outlined", sx: { m: 2 }, children: "Close" })] }));
}
export default function CancelBookingDialogDemo({ id, refreshPage, handleSuccess, handleError, }) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleCancelBooking = () => {
        // Perform cancellation logic here
        try {
            updateBookingRequest({ status: "Cancelled" }, id);
            refreshPage();
            handleSuccess("valuation cancelled successfully");
            console.log("updated");
        }
        catch (err) {
            console.log("error", err);
            handleError("error updating valuation");
        }
    };
    return (_jsxs("div", { children: [_jsx(Button, { onClick: handleClickOpen, variant: "outlined", sx: {
                    margin: "3px",
                }, children: "Cancel Booking" }), _jsx(CancelBookingDialog, { open: open, onClose: handleClose, onCancel: handleCancelBooking })] }));
}
