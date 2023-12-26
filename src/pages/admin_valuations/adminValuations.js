import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ValuationsTable from "./valuationsTable";
import { Box, Divider, Typography } from "@mui/material";
const AdminValuation = () => {
    return (_jsxs(_Fragment, { children: [_jsxs(Box, { m: 3, children: [_jsx(Typography, { fontSize: "1.9em", children: "Valuations" }), _jsx(Divider, {})] }), _jsx(Box, { m: 3, children: _jsx(ValuationsTable, {}) })] }));
};
export { AdminValuation };
