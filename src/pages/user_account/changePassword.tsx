import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  LinearProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import {
  changePassword,
  forgotPassword,
  resetPassword,
} from "../../services/apiService";
import { LockOpen, Logout, Mail } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

type ChangePasswordInputs = {
  newPassword: string;
  verifyPassword: string; // Add a field for verifying the new password
};

export function ChangePassword() {
  const {
    handleSubmit,
    control,
    formState,
    formState: { errors },
    getValues,
  } = useForm<ChangePasswordInputs>();

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data:any) => {
    try {
      setIsSubmitting(true);
      await changePassword(data.newPassword);
      setError(null);
      setPasswordResetSuccess(true);
    } catch (error: any) {
      setError(error?.error?.message);
      setSnackbarOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Box>
      <Button
        type="submit"
        variant="contained"
        onClick={() => logout()}
        style={{ borderRadius: "0px", marginTop: "20px", marginBottom: "40px" }}
        fullWidth
        startIcon={<Logout />}
      >
        Log Out
      </Button>
      <Typography variant="h5" textAlign={"center"} m={2} fontWeight="bolder">Change password</Typography>
      <form onSubmit={onSubmit}>
        <>
          <Controller
            name="newPassword"
            control={control}
            defaultValue=""
            rules={{
              required: "New password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="New Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="dense"
                error={!!errors.newPassword}
                helperText={errors.newPassword?.message}
              />
            )}
          />

          {/* Verify Password Field */}
          <Controller
            name="verifyPassword"
            control={control}
            defaultValue=""
            rules={{
              required: "Please verify your new password",
              validate: {
                passwordMatch: (value) =>
                  value === getValues("newPassword") ||
                  "Passwords do not match",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Verify Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="dense"
                error={!!errors.verifyPassword}
                helperText={errors.verifyPassword?.message}
              />
            )}
          />
        </>
        <Button
          type="submit"
          variant="contained"
          style={{ borderRadius: "0px", marginTop: "20px" }}
          fullWidth
          startIcon={<ChangeCircleIcon />}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Box width="100%">
              <LinearProgress color="primary" />
            </Box>
          ) : (
            "Change Password"
          )}
        </Button>
      </form>

      <Snackbar
        open={snackbarOpen || passwordResetSuccess}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={error}
      >
        {passwordResetSuccess ? (
          <Alert severity="success">Password reset successful!</Alert>
        ) : (
          <Alert severity="error">{`${error}`}</Alert>
        )}
      </Snackbar>
    </Box>
  );
}
