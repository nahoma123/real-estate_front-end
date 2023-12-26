import React, { ReactNode } from "react";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import { Box, Grid, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import feesIcon from "../../../assets/images/fees.png";
import reviewsIcon from "../../../assets/images/reviews.png";
import faqsIcon from "../../../assets/images/faqs.png";
import evictionServiceIcon from "../../../assets/images/eviction_service.png";
import consultingServiceIcon from "../../../assets/images/consulting_service.png";
import reviews from "../../../assets/images/reviews.png";

interface MenuContentProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}

const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "70px",
  padding: theme.spacing(2),
  justifyContent: "flex-start",
  textTransform: "capitalize",
}));

const MenuItem: React.FC<{ label: string; icon: string }> = ({
  label,
  icon,
}) => (
  <StyledButton>
    <img
      src={icon}
      alt={label}
      style={{ marginRight: "10px", height: "100%" }}
      className="w-8 h-8 md:w-10 md:h-10"
    />
    <Typography
      color={"black"}
      fontWeight={"bolder"}
      sx={{
        fontSize: {
          xs: "0.875rem", // Adjust as needed
          sm: "0.875rem", // Adjust as needed
          md: "1rem", // Adjust as needed
          lg: "1rem",
        },
      }}
      className="text" // Added a class for the text
    >
      {label}
    </Typography>
  </StyledButton>
);

const MenuContent: React.FC<MenuContentProps> = ({
  anchorEl,
  open,
  onClose,
}) => {
  const menuItems = [
    { label: "Fees", icon: feesIcon },
    { label: "Reviews", icon: reviewsIcon },
    { label: "FAQs", icon: faqsIcon },
    { label: "Eviction Service", icon: evictionServiceIcon },
    { label: "Consulting Service", icon: consultingServiceIcon },
  ];

  // Specify the image URL and set the width and height
  const centerImageURL = "your-image-url";
  const imageWidth = 200;
  const imageHeight = 200;

  return (
    <Menu
      id="fade-menu"
      MenuListProps={{
        "aria-labelledby": "fade-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      TransitionComponent={Fade}
      marginThreshold={0}
      PaperProps={{
        style: {
          width: "50%",
          maxWidth: "100%",
          left: 0,
          right: 0,
        },
      }}
      className="mt-2 md:mt-0 items-center justify-center"
    >
      <Grid container>
        <Grid item xs={6}>
          <Box p={2}>
            <Grid container direction="column" spacing={2}>
              {menuItems.map((menuItem, index) => (
                <Grid item key={index}>
                  <MenuItem
                    // xs={{ height: "50px" }}
                    label={menuItem.label}
                    icon={menuItem.icon}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" height="100%" justifyContent="center" alignItems="center" p={2}>
            <img
              src={reviews}
              alt="Center Image"
              style={{
                maxWidth: "100%",
                width: imageWidth,
                height: imageHeight,
              }}
              className="hidden md:block"
            />
          </Box>
        </Grid>
      </Grid>
    </Menu>
  );
};

export default MenuContent;
