import { Login } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Grid,
  LinearProgress,
  Snackbar,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { registerUser } from "../../services/apiService";

type RegisterFormInputs = {
  email: string;
  password: string;
  repeatPassword: string;
  phone: string;
  first_name: string;
  middle_name: string;
  last_name: string;
};

export function RegisterForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<RegisterFormInputs>();
  const [error, setError] = useState<string | null>(null); // State variable for error message

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State variable for snackbar visibility
  const [fieldError, setFieldError] = useState<string | null>(null); // State variable for field error message

  const onSubmit = handleSubmit(async (data:any) => {
    try {
      setIsSubmitting(true);
      // Call the API service to register the user
      await registerUser({
        email: data.email,
        password: data.password,
        phone: data.phone,
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
      });

      // Handle successful registration (e.g., show success message, redirect)
      console.log("Registration successful!");
      setIsSuccess(true);
    } catch (err: any) {
      // Handle registration error (e.g., display error message)
      console.log("-Error-");
      // console.log(error.response?.data); // Log the response data
      if (err?.error?.field_error) {
        // If field errors are present
        const fieldErrors = err.error.field_error;
        const firstFieldError = fieldErrors[0]; // Get the first field error

        console.log(err)  
        setSnackbarOpen(true); // Open the snackbar
  

        setFieldError(
          `${firstFieldError.name}: ${firstFieldError.description}`
        ); // Set the field error message
        setSnackbarOpen(true); // Open the snackbar
      } else {
        setSnackbarOpen(true); // Open the snackbar
      }
      setError(err?.error?.message); // Set the error message
      if (err?.error?.message===undefined){
        setError("internet connection error")
      }

    } finally {
      setIsSubmitting(false);
    }
  });

  const password = watch("password");

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Controller
              name="first_name"
              control={control}
              defaultValue=""
              rules={{
                required: "First name is required",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  error={!!errors.first_name}
                  helperText={errors.first_name?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="middle_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Middle Name"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="last_name"
              control={control}
              defaultValue=""
              rules={{
                required: "Last name is required",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  error={!!errors.last_name}
                  helperText={errors.last_name?.message}
                />
              )}
            />
          </Grid>
        </Grid>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          name="repeatPassword"
          control={control}
          defaultValue=""
          rules={{
            required: "Please repeat the password",
            validate: (value) => value === password || "Passwords do not match",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Repeat Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.repeatPassword}
              helperText={errors.repeatPassword?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{
            required: "Phone number is required",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          style={{ borderRadius: "0px", marginTop: "20px" }}
          fullWidth
          startIcon={<Login />}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Box width="100%">
              <LinearProgress color="primary" />
            </Box>
          ) : (
            "Register"
          )}
        </Button>
      </form>

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
}
