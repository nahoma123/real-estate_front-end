import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Grid, styled, Typography, Box, Menu, MenuItem } from "@mui/material";

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
  
  // Media queries for responsiveness
  '@media (max-width: 600px)': {
    height: "50%", // Adjust height for small screens
    minWidth: "120px", // Adjust minWidth for small screens
  },
  
  '@media (min-width: 601px) and (max-width: 1024px)': {
    height: "50%", // Adjust height for small screens
    minWidth: "120px", // Adjust minWidth for small screens
  },
  
  '@media (min-width: 1025px)': {
    height: "70%", // Adjust height for small screens
    minWidth: "140px", // Adjust minWidth for small screens
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    handleCloseMenu();
  };
  const SignInButton = () => (
    <>
      <StyledButton2
        endIcon={<LoginIcon fontSize="small" />}
        onClick={handleOpenMenu}
      >
        Sign In/ Register
      </StyledButton2>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => navigate("/user_account/landlord")}>
          Landlord
        </MenuItem>
        <MenuItem onClick={() => navigate("/user_account/tenant")}>
          Tenant
        </MenuItem>
        <MenuItem onClick={() => navigate("/user_account/admin")}>
          Admin
        </MenuItem>
      </Menu>
    </>
  );


  const UserButton = (endIcon:any, navigatePath:any, buttonText:any) => (
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
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} sx={{width:"100%"}}>
        <Grid
          item
          marginLeft={5}
          container
          
        >
          {headerLeft}
        </Grid>
        <Grid item xs={10} sm={10} md={12} lg={16}>
        <LogoImg />
      </Grid>
      </Box>
    );
  }

  return (
    <StyledAppBar position="absolute" >
      <Toolbar>
        <Grid container component="div" display={"flex"} direction="row">
          <Grid container item md={2} sm={0}>
            {headerLeft}
          </Grid>
          <StyledGrid container item display="flex" alignItems="center" justifyContent="center" lg={8} md={8} sm={0}>
            <Grid item container >
              <Grid
                item
                md={5}
                justifyContent="center"
                alignItems="center"
                container
              >
                <HeaderMenu label="Landlords" redirectTo="/" />
              </Grid>
              <Grid
                item
                md={2}
                justifyContent="center"
                alignItems="center"
                container
              >
                <StyledDropdown>
                  <StyledDropdownText>
                    <Typography sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.0rem', lg: '1.0rem' }, fontWeight: '700' }}>
                      Why Us
                    </Typography>
                  </StyledDropdownText>
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
                  <StyledDropdownText>
                    <Typography sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.1rem', lg: '1.1rem' }, fontWeight: '700' }}>
                      Find a property
                    </Typography>
                  </StyledDropdownText>
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
