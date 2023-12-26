import React, { useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/base";
import { ModalContext } from "../../../context/modal_container";
import BookingForm from "../forms/onboarding";
import { Typography } from "@mui/material";
import LogoImg from "../logo/image";

interface OnboardingModalProps {
  open: boolean;
  handleClose: () => void;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
};

const OnboardingModal: React.FC<OnboardingModalProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={style}>
        <Box>
          <LogoImg />
        </Box>

        <Box m={2} marginBottom={4}>
          <Typography variant="h4">Book an onboarding call</Typography>
        </Box>
        <BookingForm />
      </Box>
    </Modal>
  );
};

export const OnboardingModalWrapper: React.FC = () => {
  const { isOpen, closeModal } = useContext(ModalContext);

  return <OnboardingModal handleClose={closeModal} open={isOpen} />;
};

export default OnboardingModal;
