import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const StyledMegaMenu = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: theme.spacing(2),
    width: "900px",
    height: "500px",
}));
const MegaMenu = () => {
    return (_jsx(StyledMegaMenu, { children: _jsxs(Grid, { container: true, spacing: 2, children: [_jsxs(Grid, { item: true, xs: 3, children: [_jsx(Typography, { variant: "h6", children: "Category 1" }), _jsx("ul", {})] }), _jsx(Grid, { item: true, xs: 9 })] }) }));
};
export default MegaMenu;
