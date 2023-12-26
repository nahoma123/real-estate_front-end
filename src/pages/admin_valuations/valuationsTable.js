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
import { Box, TablePagination } from "@mui/material";
import { getRequest } from "../../utils/getRequest";
import { VALUATIONS } from "../../constants/api";
import { formatTime } from "../../utils/time";
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
function createData(address, created_at, preferred_time, email, status, id) {
    return { address, created_at, preferred_time, email, status, id };
}
function parseValuations(rows) {
    let results = [];
    rows.map((val) => {
        return results.push(createData(val.address, val.created_at, val.preferred_time, val.email, val.status, val.real_estate_id));
    });
    return results;
}
export default function ValuationsTable() {
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
    const [valuations, setValuations] = React.useState();
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
            const res = await getRequest(VALUATIONS, page, rowsPerPage, undefined, sort);
            setLoading(false);
            setValuations(parseValuations(res?.data));
            setMetaData(res?.meta_data);
            console.log("PropertiesData", valuations);
        }
        catch (error) {
            console.log("error", error);
        }
    }
    // fetch valuation ends
    // start effects
    useEffect(() => {
        handleFilter(page, rowsPerPage);
    }, [page, rowsPerPage]);
    // ends effects
    return (_jsxs(Box, { minHeight: "500px", children: [_jsx(TableContainer, { component: Paper, children: _jsxs(Table, { sx: { minWidth: 700 }, "aria-label": "customized table", children: [_jsx(TableHead, { sx: {
                                backgroundColor: theme.palette.primary.main,
                            }, children: _jsxs(TableRow, { children: [_jsx(StyledTableCell, { align: "center", children: "Address" }), _jsx(StyledTableCell, { align: "center", children: "Booked At" }), _jsx(StyledTableCell, { align: "center", children: "Booked for" }), _jsx(StyledTableCell, { align: "center", children: "Email" }), _jsx(StyledTableCell, { align: "center", children: "Status" }), _jsx(StyledTableCell, { align: "center", children: "-" })] }) }), _jsx(TableBody, { children: valuations?.map((row) => (_jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, { component: "th", scope: "row", align: "center", children: row.address }), _jsx(StyledTableCell, { align: "center", children: formatTime(row.created_at) }), _jsx(StyledTableCell, { align: "center", children: formatTime(row.preferred_time) }), _jsx(StyledTableCell, { align: "center", children: row.email }), _jsx(StyledTableCell, { align: "center", children: row.status }), _jsx(StyledTableCell, { align: "center" })] }, row.created_at))) })] }) }), _jsx(TablePagination, { rowsPerPageOptions: [10, 25, 100], component: "div", count: metaData?.TotalCount || 0, rowsPerPage: rowsPerPage, page: page - 1, onPageChange: handleChangePage, onRowsPerPageChange: handleChangeRowsPerPage })] }));
}
