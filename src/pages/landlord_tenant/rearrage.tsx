import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { Alert, Box, Divider, Snackbar, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import DateTimePickerWithValidation from "components/common/DateTimePicker";
import { validationRules } from "utils/validationRules";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm } from "react-hook-form";
import { time } from "console";
import dayjs from "dayjs";
import { updateBookingRequest } from "services/apiService";

export interface ValuationRearrangeDialogProps {
  open: boolean;
  onClose: () => void;
  currentPreferredTime: string;
  refreshPage(): void;
  id: string;
  handleSuccess(message: string): void;
  handleError(message: string): void;
}

function ValuationRearrangeDialog(props: ValuationRearrangeDialogProps) {
  const {
    onClose,
    open,
    currentPreferredTime,
    refreshPage,
    id,
    handleSuccess,
    handleError,
  } = props;
  const [preferredTime, setPreferredTime] = useState<Date>(
    new Date(currentPreferredTime)
  );

  const handleClose = () => {
    onClose();
  };

  const handleRearrange = (data: any) => {
    const { selectedDateTime } = data;

    console.log("Rearrange Valuation:", selectedDateTime);
    try {
      updateBookingRequest(
        { preferred_time: selectedDateTime.toISOString() },
        id
      );
      onClose();
      handleSuccess("valuation rearranged successful");
      console.log("updated");
    } catch (error) {
      // error message
      handleError("error updating valuation");
    }
  };

  const handlePreferredTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let date = new Date(event.target.value);
    setPreferredTime(date);
  };

  type UpdateDateTime = {
    selectedDateTime: Date | null;
  };
  const { handleSubmit, control } = useForm<UpdateDateTime>();
  const [newCurrentTime, setNewCurrentTime] = useState<string>();

  return (
    <Dialog onClose={handleClose} open={open} fullWidth>
      <DialogTitle>Rearrange Valuation</DialogTitle>
      <Box
        width="100%"
        marginTop={2}
        display={"flex"}
        justifyContent={"center"}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePickerWithValidation
            rules={validationRules.basic}
            control={control}
            dv={preferredTime.toISOString()}
            name="selectedDateTime"
            label="New Preferred Call Date and Time"
          />
        </LocalizationProvider>
      </Box>
      <Button
        onClick={handleSubmit(handleRearrange)}
        variant="contained"
        color="primary"
        sx={{ m: 2 }}
      >
        Rearrange Valuation
      </Button>
      <Button onClick={handleClose} variant="outlined" sx={{ m: 2 }}>
        Close
      </Button>
    </Dialog>
  );
}

function RearrangeBookingDialogDemo({
  refreshPage,
  currentPreferredTime,
  id,
  handleSuccess,
  handleError,
}: any) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpenDialog}
        variant="outlined"
        sx={{
          margin: "3px",
        }}
      >
        Rearrange Valuation
      </Button>
      <ValuationRearrangeDialog
        open={dialogOpen}
        refreshPage={refreshPage}
        onClose={handleCloseDialog}
        currentPreferredTime={currentPreferredTime}
        id={id}
        handleSuccess={handleSuccess}
        handleError={handleError}
      />
    </div>
  );
}

export default RearrangeBookingDialogDemo;
