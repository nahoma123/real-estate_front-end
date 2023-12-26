import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ModalContext } from "../../../context/modal_container";
import BookingForm from "../forms/onboarding";
import { Typography } from "@mui/material";
import LogoImg from "../logo/image";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    p: 4,
};
const OnboardingModal = ({ open, handleClose, }) => {
    return (_jsx(Modal, { open: open, onClose: handleClose, "aria-labelledby": "parent-modal-title", "aria-describedby": "parent-modal-description", children: _jsxs(Box, { sx: style, children: [_jsx(Box, { children: _jsx(LogoImg, {}) }), _jsx(Box, { m: 2, marginBottom: 4, children: _jsx(Typography, { variant: "h4", children: "Book an onboarding call" }) }), _jsx(BookingForm, {})] }) }));
};
export const OnboardingModalWrapper = () => {
    const { isOpen, closeModal } = useContext(ModalContext);
    return _jsx(OnboardingModal, { handleClose: closeModal, open: isOpen });
};
export default OnboardingModal;
