import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Grid, styled } from "@mui/material";
import LogoImg from "../logo/image";
import LoginIcon from "@mui/icons-material/Login";
import { StyledDropdownText, HeaderMenu, StyledDropdown, } from "../header_menu/header_menu";
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
const Header = ({ headerType = "Type2", headerLeft, }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    useEffect(() => {
        let user = localStorage.getItem("user");
        if (user != null) {
            let userObject = JSON.parse(user);
            setUser(userObject);
        }
    }, []);
    let headerSide = null; // Define the type of headerSide
    const SignInButton = () => (_jsx(StyledButton2, { endIcon: _jsx(LoginIcon, { fontSize: "small" }), onClick: () => navigate("/user_account"), children: "Sign In/ Register" }));
    const UserButton = (endIcon, navigatePath, buttonText) => (_jsx(StyledButton2, { endIcon: endIcon, onClick: () => navigate(navigatePath), children: buttonText }));
    if (user?.role === "ADMIN_ROLE") {
        headerSide = UserButton(_jsx(AdminPanelSettings, { fontSize: "small" }), "/admin_dashboard/valuations", "Admin Console");
    }
    else {
        switch (headerType) {
            case "Type1":
                headerSide =
                    user == null
                        ? SignInButton()
                        : UserButton(_jsx(Person3Outlined, { fontSize: "medium" }), "/user_account", user?.last_name);
                break;
            case "Type2":
                headerSide =
                    user == null
                        ? SignInButton()
                        : UserButton(_jsx(Person3Outlined, { fontSize: "medium" }), "/landlord_tenant/dashboard", "FreeLets Hub");
                break;
            default:
                break;
        }
    }
    const location = useLocation();
    if (location.pathname.startsWith("/admin_dashboard/") ||
        location.pathname.startsWith("/landlord_tenant/")) {
        headerSide =
            user == null
                ? SignInButton()
                : UserButton(_jsx(Person3Outlined, { fontSize: "medium" }), "/user_account", user?.last_name);
    }
    if (!headerLeft) {
        headerLeft = _jsx(LogoImg, {});
    }
    else {
        headerLeft = (_jsxs(_Fragment, { children: [_jsx(Grid, { item: true, md: 6, container: true, direction: "row", justifyContent: "center", alignContent: "center", children: headerLeft }), _jsx(Grid, { item: true, md: 6, display: "flex", direction: "row", justifyContent: "center", children: _jsx(LogoImg, {}) })] }));
    }
    return (_jsx(StyledAppBar, { position: "fixed", children: _jsx(Toolbar, { children: _jsxs(Grid, { container: true, component: "div", display: "flex", direction: "row", children: [_jsx(Grid, { container: true, item: true, md: 2, sm: 0, children: headerLeft }), _jsx(StyledGrid, { container: true, item: true, direction: "row", md: 8, sm: 8, children: _jsxs(Grid, { item: true, container: true, children: [_jsx(Grid, { item: true, md: 4, justifyContent: "center", alignItems: "center", container: true, children: _jsx(HeaderMenu, { label: "Landlords", redirectTo: "/" }) }), _jsx(Grid, { item: true, md: 4, justifyContent: "center", alignItems: "center", container: true, children: _jsx(StyledDropdown, { children: _jsx(StyledDropdownText, { children: "Why Us" }) }) }), _jsx(Grid, { item: true, md: 4, justifyContent: "center", alignItems: "center", container: true, children: _jsx(StyledDropdown, { onClick: () => navigate("/find_properties"), children: _jsx(StyledDropdownText, { children: "Find a property" }) }) })] }) }), _jsx(Grid, { container: true, item: true, md: 2, sm: 0, justifyContent: "center", alignContent: "center", children: headerSide })] }) }) }));
};
export { Header };
