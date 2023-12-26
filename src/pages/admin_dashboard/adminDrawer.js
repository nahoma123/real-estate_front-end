import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ApartmentIcon from "@mui/icons-material/Apartment";
function AdminDrawer({ children }) {
    return (_jsxs(Box, { display: "flex", children: [_jsx(Box, { flexGrow: 1, children: _jsx(Drawer, { variant: "permanent", sx: {
                        width: 250,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: 250,
                            boxSizing: "border-box",
                        },
                    }, anchor: "left", children: _jsxs(List, { children: [_jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(HomeIcon, {}) }), _jsx(ListItemText, { primary: "Home" })] }), _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(LocationOnIcon, {}) }), _jsx(ListItemText, { primary: "Properties" })] }), _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(AttachMoneyIcon, {}) }), _jsx(ListItemText, { primary: "Pricing" })] }), _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(ApartmentIcon, {}) }), _jsx(ListItemText, { primary: "Apartments" })] })] }) }) }), _jsx(Box, { flexGrow: 5, children: children })] }));
}
export { AdminDrawer };
