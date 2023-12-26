import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import DateTimePickerWithValidation from "../../components/common/DateTimePicker";
import { validationRules } from "../../utils/validationRules";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm } from "react-hook-form";
import { updateBookingRequest } from "../../services/apiService";
function ValuationRearrangeDialog(props) {
    const { onClose, open, currentPreferredTime, refreshPage, id, handleSuccess, handleError, } = props;
    const [preferredTime, setPreferredTime] = useState(new Date(currentPreferredTime));
    const handleClose = () => {
        onClose();
    };
    const handleRearrange = (data) => {
        const { selectedDateTime } = data;
        console.log("Rearrange Valuation:", selectedDateTime);
        try {
            updateBookingRequest({ preferred_time: selectedDateTime.toISOString() }, id);
            onClose();
            handleSuccess("valuation rearranged successful");
            console.log("updated");
        }
        catch (error) {
            // error message
            handleError("error updating valuation");
        }
    };
    const handlePreferredTimeChange = (event) => {
        let date = new Date(event.target.value);
        setPreferredTime(date);
    };
    const { handleSubmit, control } = useForm();
    const [newCurrentTime, setNewCurrentTime] = useState();
    return (_jsxs(Dialog, { onClose: handleClose, open: open, fullWidth: true, children: [_jsx(DialogTitle, { children: "Rearrange Valuation" }), _jsx(Box, { width: "100%", marginTop: 2, display: "flex", justifyContent: "center", children: _jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: _jsx(DateTimePickerWithValidation, { rules: validationRules.basic, control: control, dv: preferredTime.toISOString(), name: "selectedDateTime", label: "New Preferred Call Date and Time" }) }) }), _jsx(Button, { onClick: handleSubmit(handleRearrange), variant: "contained", color: "primary", sx: { m: 2 }, children: "Rearrange Valuation" }), _jsx(Button, { onClick: handleClose, variant: "outlined", sx: { m: 2 }, children: "Close" })] }));
}
function RearrangeBookingDialogDemo({ refreshPage, currentPreferredTime, id, handleSuccess, handleError, }) {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const handleOpenDialog = () => {
        setDialogOpen(true);
    };
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };
    return (_jsxs("div", { children: [_jsx(Button, { onClick: handleOpenDialog, variant: "outlined", sx: {
                    margin: "3px",
                }, children: "Rearrange Valuation" }), _jsx(ValuationRearrangeDialog, { open: dialogOpen, refreshPage: refreshPage, onClose: handleCloseDialog, currentPreferredTime: currentPreferredTime, id: id, handleSuccess: handleSuccess, handleError: handleError })] }));
}
export default RearrangeBookingDialogDemo;
