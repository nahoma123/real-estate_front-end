import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Grid, styled } from "@mui/material";

import LogoImg from "../logo/image";
import LoginIcon from "@mui/icons-material/Login";
import {
  StyledDropdownText,
  HeaderMenu,
  StyledDropdown,
} from "../header_menu/header_menu";
import { useLocation, useNavigate } from "react-router-dom";
import { AdminPanelSettings, Person3Outlined } from "@mui/icons-material";
const StyledAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  color: "#fff",
  boxShadow: "none",
});

const StyledButton2 = styled(Button)({
  height: "60%",
  fontFamily: "Open Sans",
  margin: "0px",
  minWidth: "150px",
  fontWeight: "bold",
  backgroundColor: "#948c1e45",
  color: "#948c1e",
  paddingLeft: "10px",
  paddingRight: "10px",
  "&:hover": {
    color: "#877e0f", // Set the background color on hover
  },
});

const StyledGrid = styled(Grid)({
  flexGrow: 1,
});

interface HeaderProps {
  headerType?: string;
  headerLeft?: JSX.Element;
}

const Header: React.FC<HeaderProps> = ({
  headerType = "Type2",
  headerLeft,
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>();
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user != null) {
      let userObject = JSON.parse(user);
      setUser(userObject);
    }
  }, []);

  let headerSide: JSX.Element | null = null; // Define the type of headerSide

  const SignInButton = () => (
    <StyledButton2
      endIcon={<LoginIcon fontSize="small" />}
      onClick={() => navigate("/user_account")}
    >
      Sign In/ Register
    </StyledButton2>
  );

  const UserButton = (endIcon, navigatePath, buttonText) => (
    <StyledButton2 endIcon={endIcon} onClick={() => navigate(navigatePath)}>
      {buttonText}
    </StyledButton2>
  );

  if (user?.role === "ADMIN_ROLE") {
    headerSide = UserButton(
      <AdminPanelSettings fontSize="small" />,
      "/admin_dashboard/valuations",
      "Admin Console"
    );
  } else {
    switch (headerType) {
      case "Type1":
        headerSide =
          user == null
            ? SignInButton()
            : UserButton(
                <Person3Outlined fontSize="medium" />,
                "/user_account",
                user?.last_name
              );
        break;
      case "Type2":
        headerSide =
          user == null
            ? SignInButton()
            : UserButton(
                <Person3Outlined fontSize="medium" />,
                "/landlord_tenant/dashboard",
                "FreeLets Hub"
              );
        break;
      default:
        break;
    }
  }

  const location = useLocation();
  if (
    location.pathname.startsWith("/admin_dashboard/") ||
    location.pathname.startsWith("/landlord_tenant/")
  ) {
    headerSide =
      user == null
        ? SignInButton()
        : UserButton(
            <Person3Outlined fontSize="medium" />,
            "/user_account",
            user?.last_name
          );
  }
  

  if (!headerLeft) {
    headerLeft = <LogoImg />;
  } else {
    headerLeft = (
      <>
        <Grid
          item
          md={6}
          container
          direction="row"
          justifyContent={"center"}
          alignContent={"center"}
        >
          {headerLeft}
        </Grid>
        <Grid
          item
          md={6}
          display={"flex"}
          direction="row"
          justifyContent={"center"}
        >
          <LogoImg />
        </Grid>
      </>
    );
  }

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Grid container component="div" display={"flex"} direction="row">
          <Grid container item md={2} sm={0}>
            {headerLeft}
          </Grid>
          <StyledGrid container item direction="row" md={8} sm={8}>
            <Grid item container>
              <Grid
                item
                md={4}
                justifyContent="center"
                alignItems="center"
                container
              >
                <HeaderMenu label="Landlords" redirectTo="/" />
              </Grid>
              <Grid
                item
                md={4}
                justifyContent="center"
                alignItems="center"
                container
              >
                <StyledDropdown>
                  <StyledDropdownText>Why Us</StyledDropdownText>
                </StyledDropdown>
              </Grid>

              <Grid
                item
                md={4}
                justifyContent="center"
                alignItems="center"
                container
              >
                <StyledDropdown onClick={() => navigate("/find_properties")}>
                  <StyledDropdownText>Find a property</StyledDropdownText>
                </StyledDropdown>
              </Grid>
            </Grid>
            {/* docs */}
          </StyledGrid>
          <Grid
            container
            item
            md={2}
            sm={0}
            justifyContent="center"
            alignContent={"center"}
          >
            {headerSide}
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export { Header };
