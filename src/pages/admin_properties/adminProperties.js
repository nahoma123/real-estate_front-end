import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import PropertiesTable from "./propertiesTable";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AddCard } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const AdminProperties = () => {
    let navigate = useNavigate();
    return (_jsxs(_Fragment, { children: [_jsxs(Grid, { container: true, m: 3, width: "100%", children: [_jsx(Grid, { item: true, md: 10, children: _jsx(Typography, { fontSize: "1.9em", children: "Properties" }) }), _jsx(Grid, { item: true, md: 2, display: "flex", alignItems: "center", children: _jsxs(Button, { variant: "contained", onClick: () => navigate("/admin_dashboard/add_properties"), children: [_jsx(Box, { marginRight: 1, alignContent: "center", children: _jsx(AddCard, { fontSize: "small" }) }), "Add Properties"] }) })] }), _jsx(Box, { m: 3, children: _jsx(PropertiesTable, {}) })] }));
};
export { AdminProperties };
