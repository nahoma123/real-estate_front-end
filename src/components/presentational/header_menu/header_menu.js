import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
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
const HeaderMenu = ({ label, redirectTo }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const handleMouseEnter = (event) => {
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
    return (_jsxs(Box, { onClick: handleDropdownClick, children: [_jsxs(StyledDropdown, { id: "fade-button", "aria-controls": isOpen ? "fade-menu" : undefined, "aria-haspopup": "true", "aria-expanded": isOpen ? "true" : undefined, 
                // Call handleDropdownClick instead of console.log("testing")
                onMouseOver: handleMouseEnter, sx: { color: "white" }, children: [_jsx(DropdownText, { variant: "button", display: "block", children: label }), _jsx(ArrowDropDownIcon, { sx: { color: isOpen ? "#948c1e" : "black" } })] }), _jsx(MenuContent, { anchorEl: anchorEl, open: isOpen, onClose: handleMouseLeave })] }));
};
export { HeaderMenu, StyledDropdownText, StyledDropdown };
