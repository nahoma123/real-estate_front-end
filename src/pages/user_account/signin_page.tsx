import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { LoginForm } from "./signin_form";
import { RegisterForm } from "./register";
import { ForgotPasswordForm } from "./forgotPassword";
import FlexibleImgComponent from "../../components/presentational/image/flexible_img";
// import { ForgotPassword } from "./ForgotPassword";
import ProfileIcon from "../../assets/images/user_profile.png";
import { getSignedUser, isSignedIn } from "../../utils/credentials";
import { ChangePassword } from "./changePassword";

const AuthContainer = () => {
  const [activeForm, setActiveForm] = useState("login");

  const handleFormChange = (form: string) => {
    setActiveForm(form);
  };

  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} display="flex" justifyContent={"center"}>
          <FlexibleImgComponent
            imageUrl={ProfileIcon}
            alt="Profile Icon"
            style={{ height: "90px" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box paddingTop={2} paddingBottom={2} margin={1}>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h4"
              align="center"
              gutterBottom
            >
              {!isSignedIn()
                ? "Welcome to our FreeLets!"
                : `Hello ${getSignedUser()?.first_name} ${
                    getSignedUser()?.last_name
                  }`}
            </Typography>
          </Box>
          {!isSignedIn() ? (
            <>
              <Box margin={3} marginTop={1}>
                {activeForm === "login" && <LoginForm />}
                {activeForm === "register" && <RegisterForm />}
                {activeForm === "forgotPassword" && <ForgotPasswordForm />}
              </Box>
              <Box margin={3} display="flex" justifyContent="space-between">
                {activeForm !== "login" && (
                  <Button
                    variant="text"
                    color="primary"
                    sx={{
                      fontSize: "initial",
                      textTransform: "none",
                      backgroundColor: "transparent",
                      color: "black",
                      cursor: "pointer",
                    }}
                    style={{
                      backgroundColor: "transparent",
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={() => handleFormChange("login")}
                  >
                    Back to Login
                  </Button>
                )}
                <div className="flex flex-col justify-center items-center w-full">
                  {activeForm !== "register" && (
                    <Button
                      variant="text"
                      sx={{
                        fontSize: "initial",
                        textTransform: "none",
                        backgroundColor: "transparent",
                        color: "black",
                        cursor: "pointer",
                      }}
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                        cursor: "pointer",
                      }}
                      onClick={() => handleFormChange("register")}
                    >
                      Don't have an account? Register here.
                    </Button>
                  )}
                  {activeForm !== "forgotPassword" && (
                    <Button
                      variant="text"
                      color="primary"
                      sx={{
                        fontSize: "initial",
                        textTransform: "none",
                        backgroundColor: "transparent",
                        color: "black",
                        cursor: "pointer",
                      }}
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                        cursor: "pointer",
                      }}
                      onClick={() => handleFormChange("forgotPassword")}
                    >
                      Forgot Password
                    </Button>
                  )}
                </div>
              </Box>
            </>
          ) : (
            <Box>
              <ChangePassword />
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export { AuthContainer };
