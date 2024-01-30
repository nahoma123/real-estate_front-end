import { Box, Typography, lighten, useMediaQuery, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import { useNavigate } from "react-router-dom";
import HandymanIcon from '@mui/icons-material/Handyman';
import ArticleIcon from '@mui/icons-material/Article';
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@material-ui/icons/Close';


const HubOptionsContainer = styled(Box)(({ theme }) => ({
  width: "240px",
  flexShrink: 0,
  height:'400px',
  margin: "0px",
  marginTop: "40px",
  backgroundColor: lighten(theme.palette.action.disabledBackground, 0.8),
  borderRadius: "16px"
}));

interface HubOptionButtonProps {
  label: string;
  activeTab: string;
  handleTabClick(tab: string): void;
}

const HubOptionButton: React.FC<HubOptionButtonProps> = ({
  label,
  activeTab,
  handleTabClick,
}) => {
  let icon;

  switch (label) {
    case 'Dashboard':
      icon = <MailIcon />;
      break;
    case 'Maintenace':
      icon = <HandymanIcon />;
      break;
    case 'My Contract':
      icon = <ArticleIcon />;
      break;
    case 'Messages':
      icon = <InboxIcon />;
      break;
    default:
      icon = null;
  }

  return (
    <ListItemButton
      selected={activeTab === label}
      onClick={() => handleTabClick(label)}
    >
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

const HubOptions: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Set the breakpoint as needed

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    handleMenuClose(); // Close the menu after selecting a tab
    switch (tabName) {
      case 'Dashboard':
        navigate("/tenant/dashboard");
        break;
      case 'Maintenace':
        navigate("/tenant/maintenance");
        break;
      case 'My Contract':
        navigate("/tenant/mycontracts");
        break;
      case 'Messages':
        navigate("/tenant/messages");
        break;
      default:
        // Handle other cases if needed
    }
  };

  if (isSmallScreen) {
    return (
      <div>
        <IconButton onClick={handleMenuOpen}>
          {anchorEl ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <MenuItem onClick={() => handleTabClick("Dashboard")}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            Dashboard
          </MenuItem>
          <MenuItem onClick={() => handleTabClick("Maintenace")}>
            <ListItemIcon>
              <HandymanIcon />
            </ListItemIcon>
            Maintenance
          </MenuItem>
          <MenuItem onClick={() => handleTabClick("My Contract")}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            My Contract
          </MenuItem>
          <MenuItem onClick={() => handleTabClick("Messages")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            Messages
          </MenuItem>
        </Menu>
      </div>
    );
  }

  return (
      <HubOptionsContainer>
        <Box display={"flex"} flexDirection={"column"} padding={2}>
          <Typography
            marginTop={3}
            marginBottom={1}
            fontWeight={"bolder"}
            fontSize={"20px"}
            textAlign={"center"}
            color={"#5E5B5C"}
          >
            FreeLet Hub
          </Typography>
          <List>
            <HubOptionButton
              activeTab={activeTab}
              label="Dashboard"
              handleTabClick={handleTabClick}
            />
            <HubOptionButton
              activeTab={activeTab}
              label="Maintenace"
              handleTabClick={handleTabClick}
            />
            <HubOptionButton
              activeTab={activeTab}
              label="My Contract"
              handleTabClick={handleTabClick}
            />
            <HubOptionButton
              activeTab={activeTab}
              label="Messages"
              handleTabClick={handleTabClick}
            />
          </List>
        </Box>
      </HubOptionsContainer>
  );
};

export { HubOptions };
