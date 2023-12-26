import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, lighten } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/system";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
const HubOptionsContainer = styled(Box)(({ theme }) => ({
    width: "240px",
    flexShrink: 0,
    margin: "0px",
    marginTop: "40px",
    backgroundColor: lighten(theme.palette.action.disabledBackground, 0.8),
    borderRadius: "16px"
}));
const HubOptionButton = ({ label, activeTab, handleTabClick, }) => {
    return (_jsxs(ListItemButton, { selected: activeTab === label, onClick: () => handleTabClick(label), children: [_jsx(ListItemIcon, { children: _jsx(MailIcon, {}) }), _jsx(ListItemText, { primary: label })] }));
};
const HubOptions = () => {
    const [activeTab, setActiveTab] = useState("Inbox");
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (_jsx(HubOptionsContainer, { children: _jsxs(Box, { display: "flex", flexDirection: "column", padding: 2, children: [_jsx(Typography, { marginTop: 3, marginBottom: 1, fontWeight: "bolder", fontSize: "20px", textAlign: "center", color: "#5E5B5C", children: "FreeLet Hub" }), _jsx(List, { children: _jsx(HubOptionButton, { activeTab: activeTab, label: "Dashboard", handleTabClick: handleTabClick }) })] }) }));
};
export { HubOptions };
