import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Toolbar, Button, Grid, styled } from "@mui/material";
import LogoImg from "../logo/image";
const StyledAppBar = styled(AppBar)({
    backgroundColor: "#fff",
    color: "#fff",
    boxShadow: "none",
});
const StyledButton2 = styled(Button)({
    height: "60%",
    fontFamily: "Open Sans",
    margin: "0px",
    fontWeight: "bold",
    backgroundColor: "#948c1e45",
    color: "#948c1e",
    paddingLeft: "10px",
    paddingRight: "10px",
    "&:hover": {
        color: "#877e0f", // Set the background color on hover
    },
});
const StyledGrid = styled(Grid)({});
const SecondaryHeader = () => {
    return (_jsx(StyledAppBar, { position: "fixed", children: _jsx(Toolbar, { children: _jsxs(Grid, { container: true, component: "div", children: [_jsx(Grid, { item: true, md: 2, sm: 0, children: _jsx(LogoImg, {}) }), _jsx(StyledGrid, { container: true, item: true, direction: "row", md: 8, sm: 8 }), _jsx(Grid, { container: true, item: true, md: 2, sm: 0, justifyContent: "center", alignContent: "center" })] }) }) }));
};
export { SecondaryHeader };
