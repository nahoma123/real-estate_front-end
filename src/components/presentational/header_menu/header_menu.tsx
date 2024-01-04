import React, { useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box, styled, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuContent from "./menu_content";

const StyledDropdownText = styled(Typography)(({ theme }) => ({
  backgroundColor: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "white",
    color: "#948c1e",
  },
  textTransform: "capitalize",
  color: "black",
  fontSize: "1.1rem",
  "& .MuiButton-label": {
    fontWeight: 1000,
  },
}));

const StyledDropdown = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "#948c1e",
  },
  "&:hover $dropdownText": {
    color: "#948c1e",
  },
}));

const DropdownText = styled(StyledDropdownText)({
  color: "black",
});

interface HeaderMenuProps {
  label: string;
  redirectTo?: string;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ label, redirectTo }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  const handleMenuItemClick = () => {
    console.log("looog");
    if (redirectTo) {
      navigate(redirectTo);
    }
  };

  const handleDropdownClick = () => {
    console.log("testing"); // Additional test log
    handleMenuItemClick(); // Call the handleMenuItemClick function on dropdown click
  };

  return (
    <Box onClick={handleDropdownClick}>
      <StyledDropdown
        id="fade-button"
        aria-controls={isOpen ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        // Call handleDropdownClick instead of console.log("testing")
        onMouseOver={handleMouseEnter}
        sx={{ color: "white" }}
      >
        <DropdownText variant="button" display="block">
          {/* <Typography sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.1rem', lg: '1.1rem' }, fontWeight: '700' }} > {label} </Typography> */}
          {label}
        </DropdownText>
        <ArrowDropDownIcon sx={{ color: isOpen ? "#948c1e" : "black" }} />
      </StyledDropdown>
      <MenuContent
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleMouseLeave}
      />
    </Box>
  );
};

export { HeaderMenu, StyledDropdownText, StyledDropdown };
