import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from "../../components/presentational/header/Header";
import { Box, Container, Grid } from "@mui/material";
import { AdminValuation } from "../admin_valuations/adminValuations";
const AdminDashboard = () => {
    // Use the `params.subRoute` value to render the appropriate components
    return (_jsxs(Box, { children: [_jsx(Box, { display: "flex", alignContent: "center", justifyContent: "center", children: _jsx(Header, { headerType: "Type1" }) }), _jsx(Container, { children: _jsx(Grid, { container: true, children: _jsx(AdminValuation, {}) }) })] }));
};
export { AdminDashboard };
