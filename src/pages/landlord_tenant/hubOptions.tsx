import { Box, Typography, lighten } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import HandymanIcon from '@mui/icons-material/Handyman';
import ArticleIcon from '@mui/icons-material/Article';
import HouseIcon from '@mui/icons-material/House';

const HubOptionsContainer = styled(Box)(({ theme }) => ({
  width: "240px",
  flexShrink: 0,
  margin:"0px",
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
    case 'Notification':
      icon = <CircleNotificationsIcon />;
      break;
    case 'My Contract':
      icon = <ArticleIcon />;
      break;
    case 'Messages':
      icon = <InboxIcon />;
      break;
    case 'Properties':
    icon = <HouseIcon />;
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
  const [activeTab, setActiveTab] = useState("Inbox");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    switch (tabName) {
      case 'Dashboard':
        navigate("/landlord/dashboard");
        break;
      case 'Notification':
        navigate("/landlord/notification");
        break;
      case 'My Contract':
        navigate("/landlord/mycontracts");
        break;
      case 'Messages':
        navigate("/landlord/messages");
      case 'Properties':
        navigate("/landlord/properties");
        break;
      default:
        // Handle other cases if needed
    }
  };

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
            label="Notification"
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
          <HubOptionButton
            activeTab={activeTab}
            label="Properties"
            handleTabClick={handleTabClick}
          />
        </List>
      </Box>
    </HubOptionsContainer>
  );
};

export { HubOptions };