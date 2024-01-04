import { LockOpen } from "@mui/icons-material";
import { Box, Button, LinearProgress } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser_Tenant } from "../../services/apiService";
import TextFieldWithValidation from "../../components/common/TextFieldWithValidation";
import PasswordFieldWithValidation from "../../components/common/PasswordFieldWithValidation";
import ErrorSnackbar from "../../components/common/ErrorSnackbar";
import { validationRules } from "../../utils/validationRules";
import { useNavigate } from "react-router-dom";

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginFormTenant: React.FC = () => {
  const {
    handleSubmit,
    control,
  } = useForm<LoginFormInputs>();
  const [error, setError] = useState<string | null>(null); // State variable for error message
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State variable for snackbar visibility
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data:any) => {
    try {
      setIsSubmitting(true);
      const responseData = await loginUser_Tenant(data?.email, data?.password);
      localStorage.setItem("token", responseData?.data?.token)
      localStorage.setItem("user", JSON.stringify(responseData?.data?.user))
      navigate("/tenant/dashboard");
      // if (responseData?.data?.user?.role === "ADMIN_ROLE"){
      //   navigate("/admin_dashboard/valuations", {replace: true})
      // }else{
      //   navigate("/landlord_tenant/dashboard", {replace: true})
      // }
    } catch (err: any) {
      console.log(err)
      setError(err?.error?.message); // Set the error message
      if (err?.error?.message===undefined){
        setError("internet connection error")
      }

      setSnackbarOpen(true); // Open the snackbar
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <TextFieldWithValidation
          name="email"
          control={control}
          defaultValue=""
          rules={validationRules.email}
          label="Email"
          fullWidth
        />

        <PasswordFieldWithValidation
          name="password"
          control={control}
          defaultValue=""
          rules={validationRules.password}
          label="Password"
        />

        <Button
          type="submit"
          variant="contained"
          style={{ borderRadius: "0px", marginTop: "20px" }}
          fullWidth
          startIcon={<LockOpen />}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Box width="100%">
              <LinearProgress color="primary" />
            </Box>
          ) : (
            "Login"
          )}
        </Button>
      </form>

      <ErrorSnackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message={error}
      />
    </Box>
  );
};

export { LoginFormTenant };
