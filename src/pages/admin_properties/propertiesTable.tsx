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
import { FilterType, getRequest } from "../../utils/getRequest";
import { PROPERTIES, VALUATIONS } from "../../constants/api";

import { formatTime } from "../../utils/time";
import { PropertyData } from "../../services/findPropertyFilter";
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

function createData(
  id:string,
  address: string,
  created_at: string | undefined,
  postal_code: string,
  epc: string,
  property_type: string,
  property_details: string,
  status: string
) {
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

function parseProperties(rows: PropertyData[]): any[] {
  let results: any[] = [];
  rows.map((val) => {
    return results.push(
      createData(
        val.property_id,
        val.address,
        val.created_at,
        val.postal_code,
        val.epc,
        val.property_type,
        val.property_details,
        val.status
      )
    );
  });

  return results;
}

export default function PropertiesTable() {
  const theme = useTheme();

  // pagination start
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    console.log("New Page", newPage + 1);
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
  };

  // pagination ends

  // fetch valuation start
  const [loading, setLoading] = React.useState<boolean>(false);
  const [properties, setProperties] = React.useState<PropertyData[]>();
  const [metaData, setMetaData] = React.useState<any>();
  async function handleFilter(page: number, rowsPerPage: number) {
    try {
      setLoading(true);
      const filters: FilterType[] = [
        // {
        //   field: "preferred_time",
        //   operator: "gte",
        //   value: currentDateTimeUTC,
        // },
      ];
      const sort = { id: "desc" };

      const res: any = await getRequest(
        PROPERTIES,
        page,
        rowsPerPage,
        undefined,
        sort
      );
      setLoading(false);
      setProperties(parseProperties(res?.data));
      setMetaData(res?.meta_data);
      console.log("PropertiesData", res?.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  // fetch valuation ends

  // start effects

  const navigate = useNavigate()


  useEffect(() => {
    handleFilter(page, rowsPerPage);
  }, [page, rowsPerPage]);
  // ends effects

  return (
    <Box minHeight={"500px"} width={"100%"} margin={"0px 0px"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <TableContainer component={Paper} style={{ maxWidth: '100vw', overflowX: 'auto' }}>
        <Table aria-label="customized table">
          <TableHead
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <TableRow>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Registered At</StyledTableCell>
              <StyledTableCell align="center">EPC</StyledTableCell>
              <StyledTableCell align="center">Post Code</StyledTableCell>
              <StyledTableCell align="center">Property Type</StyledTableCell>
              <StyledTableCell align="center">Property Details</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">-</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties?.map((row) => (
              <StyledTableRow key={row.created_at}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.address}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {formatTime(row.created_at)}
                </StyledTableCell>
                <StyledTableCell align="center">{row.epc}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.postal_code}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.property_type}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.property_details}
                </StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/admin_dashboard/edit_properties/${row.id}`)}
                  >
                    Update
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={metaData?.TotalCount || 0}
        rowsPerPage={rowsPerPage}
        page={page - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
