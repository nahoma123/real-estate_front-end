import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { Box, Button, TablePagination } from "@mui/material";
import { getRequest } from "../../utils/getRequest";
import { PROPERTIES } from "../../constants/api";
import { formatTime } from "../../utils/time";
import { useNavigate } from "react-router-dom";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));
function createData(id, address, created_at, postal_code, epc, property_type, property_details, status) {
    return {
        id,
        address,
        postal_code,
        property_type,
        epc,
        property_details,
        created_at,
        status,
    };
}
function parseProperties(rows) {
    let results = [];
    rows.map((val) => {
        return results.push(createData(val.property_id, val.address, val.created_at, val.postal_code, val.epc, val.property_type, val.property_details, val.status));
    });
    return results;
}
export default function PropertiesTable() {
    const theme = useTheme();
    // pagination start
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        console.log("New Page", newPage + 1);
        setPage(newPage + 1);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
    };
    // pagination ends
    // fetch valuation start
    const [loading, setLoading] = React.useState(false);
    const [properties, setProperties] = React.useState();
    const [metaData, setMetaData] = React.useState();
    async function handleFilter(page, rowsPerPage) {
        try {
            setLoading(true);
            const filters = [
            // {
            //   field: "preferred_time",
            //   operator: "gte",
            //   value: currentDateTimeUTC,
            // },
            ];
            const sort = { id: "desc" };
            const res = await getRequest(PROPERTIES, page, rowsPerPage, undefined, sort);
            setLoading(false);
            setProperties(parseProperties(res?.data));
            setMetaData(res?.meta_data);
            console.log("PropertiesData", res?.data);
        }
        catch (error) {
            console.log("error", error);
        }
    }
    // fetch valuation ends
    // start effects
    const navigate = useNavigate();
    useEffect(() => {
        handleFilter(page, rowsPerPage);
    }, [page, rowsPerPage]);
    // ends effects
    return (_jsxs(Box, { minHeight: "500px", children: [_jsx(TableContainer, { component: Paper, children: _jsxs(Table, { sx: { minWidth: 700 }, "aria-label": "customized table", children: [_jsx(TableHead, { sx: {
                                backgroundColor: theme.palette.primary.main,
                            }, children: _jsxs(TableRow, { children: [_jsx(StyledTableCell, { align: "center", children: "Address" }), _jsx(StyledTableCell, { align: "center", children: "Registered At" }), _jsx(StyledTableCell, { align: "center", children: "EPC" }), _jsx(StyledTableCell, { align: "center", children: "Post Code" }), _jsx(StyledTableCell, { align: "center", children: "Property Type" }), _jsx(StyledTableCell, { align: "center", children: "Property Details" }), _jsx(StyledTableCell, { align: "center", children: "Status" }), _jsx(StyledTableCell, { align: "center", children: "-" })] }) }), _jsx(TableBody, { children: properties?.map((row) => (_jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, { component: "th", scope: "row", align: "center", children: row.address }), _jsx(StyledTableCell, { align: "center", children: formatTime(row.created_at) }), _jsx(StyledTableCell, { align: "center", children: row.epc }), _jsx(StyledTableCell, { align: "center", children: row.postal_code }), _jsx(StyledTableCell, { align: "center", children: row.property_type }), _jsx(StyledTableCell, { align: "center", children: row.property_details }), _jsx(StyledTableCell, { align: "center", children: row.status }), _jsx(StyledTableCell, { align: "center", children: _jsx(Button, { variant: "outlined", onClick: () => navigate(`/admin_dashboard/edit_properties/${row.id}`), children: "Update" }) })] }, row.created_at))) })] }) }), _jsx(TablePagination, { rowsPerPageOptions: [10, 25, 100], component: "div", count: metaData?.TotalCount || 0, rowsPerPage: rowsPerPage, page: page - 1, onPageChange: handleChangePage, onRowsPerPageChange: handleChangeRowsPerPage })] }));
}
