import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UpcomingInspectionsTable from "./inspections_table";
const UpcomingInspections = () => {
    let navigate = useNavigate();
    return (_jsxs(_Fragment, { children: [_jsx(Grid, { container: true, m: 3, width: "100%", children: _jsx(Grid, { item: true, md: 10, children: _jsx(Typography, { fontSize: "1.9em", children: "Upcoming Inspections" }) }) }), _jsx(Box, { m: 3, children: _jsx(UpcomingInspectionsTable, {}) })] }));
};
export { UpcomingInspections };
