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
import { VALUATIONS } from "../../constants/api";
import { BookingValuationData } from "../../services/datamodels";
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

function createData(
  address: string,
  created_at: string | undefined,
  preferred_time: string | undefined,
  email: string,
  status: string | undefined,
  id: string | undefined
) {
  return { address, created_at, preferred_time, email, status, id };
}

function parseValuations(rows: BookingValuationData[]): any[] {
  let results: any[] = [];
  rows.map((val) => {
    return results.push(
      createData(
        val.address,
        val.created_at,
        val.preferred_time,
        val.email,
        val.status,
        val.real_estate_id
      )
    );
  });

  return results;
}

export default function ValuationsTable() {
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
  const [valuations, setValuations] = React.useState<any[]>();
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
        VALUATIONS,
        page,
        rowsPerPage,
        undefined,
        sort
      );
      setLoading(false);
      setValuations(parseValuations(res?.data));
      setMetaData(res?.meta_data);
      console.log("PropertiesData", valuations);
    } catch (error) {
      console.log("error", error);
    }
  }

  // fetch valuation ends

  // start effects
  useEffect(() => {
    handleFilter(page, rowsPerPage);
  }, [page, rowsPerPage]);
  // ends effects

  return (
    <Box minHeight={"500px"}>
      <TableContainer component={Paper} style={{ maxWidth: '90vw', overflowX: 'auto' }}>
        <Table aria-label="customized table">
          <TableHead
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <TableRow>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Booked At</StyledTableCell>
              <StyledTableCell align="center">Booked for</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">-</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {valuations?.map((row) => (
              <StyledTableRow key={row.created_at}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.address}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {formatTime(row.created_at)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {formatTime(row.preferred_time)}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">
                  {/* <Button variant="outlined">Update </Button> */}
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
