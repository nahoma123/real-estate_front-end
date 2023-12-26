import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { updateBookingRequest } from "../../services/apiService";

export interface CancelBookingDialogProps {
  open: boolean;
  onClose: () => void;
  onCancel: () => void;
}

function CancelBookingDialog(props: CancelBookingDialogProps) {
  const { onClose, onCancel, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleCancel = () => {
    onCancel();
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Cancel Valuation Booking</DialogTitle>
      <Typography variant="body1" component="div" sx={{ p: 2 }}>
        Are you sure you want to cancel your valuation booking?
      </Typography>
      <Button
        onClick={handleCancel}
        variant="contained"
        color="error"
        sx={{ m: 2 }}
      >
        Cancel Booking
      </Button>
      <Button onClick={handleClose} variant="outlined" sx={{ m: 2 }}>
        Close
      </Button>
    </Dialog>
  );
}

export default function CancelBookingDialogDemo({
  id,
  refreshPage,
  handleSuccess,
  handleError,
}: any) {
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
    } catch (err: any) {
      console.log("error", err);
      handleError("error updating valuation");
    }
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="outlined"
        sx={{
          margin: "3px",
        }}
      >
        Cancel Booking
      </Button>
      <CancelBookingDialog
        open={open}
        onClose={handleClose}
        onCancel={handleCancelBooking}
      />
    </div>
  );
}
