import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { lighten, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Header } from "../presentational/header/Header";
import Footer from "./footer/footer";
import { Drawer } from "@mui/material";
import { Outlet, useLocation, useNavigate, } from "react-router-dom";
const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));
function CustomDrawer({ selectedItem, open, handleDrawerClose }) {
    const theme = useTheme();
    const navigate = useNavigate();
    return (_jsxs(Drawer, { sx: {
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
            },
        }, variant: "persistent", anchor: "left", open: open, children: [_jsx(DrawerHeader, { children: _jsx(IconButton, { onClick: handleDrawerClose, children: theme.direction === "ltr" ? (_jsx(ChevronLeftIcon, {})) : (_jsx(ChevronRightIcon, {})) }) }), _jsx(Divider, {}), _jsxs(List, { children: [_jsx(ListItem, { onClick: () => navigate("/admin_dashboard/valuations"), disablePadding: true, sx: {
                            backgroundColor: selectedItem.includes("valuations")
                                ? lighten(theme.palette.primary.light, 0.6)
                                : "inherit",
                        }, children: _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(InboxIcon, {}) }), _jsx(ListItemText, { primary: "Valuations" })] }) }), _jsx(ListItem, { onClick: () => navigate("/admin_dashboard/properties"), disablePadding: true, sx: {
                            backgroundColor: selectedItem.includes("properties")
                                ? lighten(theme.palette.primary.light, 0.6)
                                : "inherit",
                        }, children: _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(InboxIcon, {}) }), _jsx(ListItemText, { primary: "Properties" })] }) }), _jsx(ListItem, { onClick: () => navigate("/admin_dashboard/inspections"), disablePadding: true, sx: {
                            backgroundColor: selectedItem === "inspections"
                                ? lighten(theme.palette.primary.light, 0.6)
                                : "inherit",
                        }, children: _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(InboxIcon, {}) }), _jsx(ListItemText, { primary: "Inspections" })] }) }), _jsx(ListItem, { onClick: () => navigate("/admin_dashboard/maintenance_requests"), disablePadding: true, sx: {
                            backgroundColor: selectedItem === "maintenance_requests"
                                ? lighten(theme.palette.primary.light, 0.6)
                                : "inherit",
                        }, children: _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(InboxIcon, {}) }), _jsx(ListItemText, { primary: "Maintenance" })] }) })] }), _jsx(Divider, {})] }));
}
export default function AdminDashboardLayout() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const location = useLocation();
    React.useEffect(() => {
        console.log("subRoute", location.pathname);
    }, []);
    return (_jsxs(Box, { sx: { display: "flex" }, children: [_jsx(CssBaseline, {}), _jsx(Header, { headerLeft: _jsx(_Fragment, { children: _jsx(IconButton, { color: "inherit", "aria-label": "open drawer", onClick: handleDrawerOpen, edge: "start", sx: {
                            backgroundColor: theme.palette.primary.light,
                            ":hover": {
                                backgroundColor: theme.palette.primary.main,
                            },
                            ...(open && { display: "none" }),
                        }, children: _jsx(MenuIcon, {}) }) }) }), _jsx(CustomDrawer, { selectedItem: location.pathname, open: open, handleDrawerClose: handleDrawerClose }), _jsxs(Main, { open: open, children: [_jsx(DrawerHeader, {}), _jsx(Outlet, {}), _jsx(Footer, {})] })] }));
}
