import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  MenuItem,
  Snackbar,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextFieldWithValidation from "../../components/common/TextFieldWithValidation";
import DateTimePickerWithValidation from "../../components/common/DateTimePicker";
import { validationRules } from "utils/validationRules";
import { registerUser, submitBookingRequest } from "services/apiService";
import { useNavigate } from "react-router-dom";

type BookValuationRegistrationProps = {};

type FormInputs = {
  address: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  status: string;
  termsAccepted: boolean;
  selectedDateTime: Date | null;
};

const BookValuationRegistration: React.FC<
  BookValuationRegistrationProps
> = () => {
  const { handleSubmit, control } = useForm<FormInputs>();
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let address = sessionStorage.getItem("address");
    if (address == null) {
      setAddress("");
    } else {
      setAddress(address);
    }
  }, []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // State variable for error message

  const [isSuccess, setIsSuccess] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State variable for snackbar visibility
  const [fieldError, setFieldError] = useState<string | null>(null); // State variable for field error message

  const onSubmit = handleSubmit(async (data:any) => {
    try {
      setLoading(true);
      let time = data.selectedDateTime?.toISOString();
      sessionStorage.setItem(
        "selected_datetime",
        time === undefined ? "" : time
      );

      let bookingRequest = {
        address: address,
        why_joined: parseInt(data.status),
        full_name: data.fullName,
        email: data.email,
        phone_number: data.phoneNumber,
        preferred_time: time,
      };
      await submitBookingRequest(bookingRequest);

      setIsSuccess(true);
      navigate("/book_valuation_registration_confirmation");
    } catch (error: any) {
      // Handle registration error (e.g., display error message)
      console.log("-Error-");
      // console.log(error.response?.data); // Log the response data
      if (error?.error?.field_error) {
        // If field errors are present
        const fieldErrors = error.error.field_error;
        const firstFieldError = fieldErrors[0]; // Get the first field error
        setFieldError(
          `${firstFieldError.name}: ${firstFieldError.description}`
        ); // Set the field error message
        setSnackbarOpen(true); // Open the snackbar
      } else {
        setError(error?.error?.message); // Set the general error message
        setSnackbarOpen(true); // Open the snackbar
      }
    } finally {
      setLoading(false);
    }
  });

  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item sm={6}>
          <Box paddingTop={5} paddingBottom={2} margin={3}>
            <Grid justifyContent={"left"}>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h3"
                align="left"
                gutterBottom
              >
                Let's value your home
              </Typography>
              <Typography
                variant="h5"
                align="left"
                style={{ display: "inline" }}
              >
                Book a no-obligation home valuation with our FreeLets agent:
              </Typography>
            </Grid>
          </Box>

          <Box margin={3}>
            <form onSubmit={onSubmit}>
              <TextFieldWithValidation
                fullWidth
                name="fullName"
                control={control}
                defaultValue=""
                label="Full Name"
                rules={validationRules.fullName}
              />

              <TextFieldWithValidation
                fullWidth
                name="email"
                control={control}
                rules={validationRules.email}
                defaultValue=""
                label="Email Address"
                type="email"
              />

              <TextFieldWithValidation
                fullWidth
                name="phoneNumber"
                control={control}
                defaultValue=""
                label="Phone Number"
                rules={validationRules.phoneNumber}
                type="tel"
              />

              <TextFieldWithValidation
                fullWidth
                name="status"
                control={control}
                defaultValue=""
                rules={validationRules.select}
                label="Which best describes your status?"
                select
              >
                <MenuItem value="1">I'm ready to list with FreeLets</MenuItem>
                <MenuItem value="2">
                  I want to learn more about FreeLets
                </MenuItem>
                <MenuItem value="3">
                  I'm not sure if I'm ready to sell yet
                </MenuItem>
                <MenuItem value="4">Just curious about value</MenuItem>
              </TextFieldWithValidation>

              <Box width="100%" marginTop={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePickerWithValidation
                    rules={validationRules.basic}
                    control={control}
                    name="selectedDateTime"
                    label="Preferred Call Date and Time"
                  />
                </LocalizationProvider>
              </Box>

              <Box marginTop={2} marginBottom={2}>
                <Box display="flex" alignItems="center">
                  <Checkbox
                    // checked={termsAccepted}
                    // onChange={handleTermsAcceptedChange}
                    required
                  />
                  <Typography variant="body2">
                    I accept the terms and conditions.
                  </Typography>
                </Box>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                style={{ borderRadius: 0, marginTop: 20 }}
                disabled={loading}
              >
                {loading ? (
                  <Box width="100%">
                    <CircularProgress color="primary" />
                  </Box>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={error}
      >
        <Alert severity="error">{`${error}`}</Alert>
      </Snackbar>

      <Snackbar
        open={isSuccess}
        autoHideDuration={6000}
        onClose={() => setIsSuccess(false)}
        message="Registered successfully"
      >
        <Alert severity="success">Registered successfully!</Alert>
      </Snackbar>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={error || fieldError}
      >
        <Alert severity="error">{error || fieldError}</Alert>
      </Snackbar>
    </Box>
  );
};

export { BookValuationRegistration };
