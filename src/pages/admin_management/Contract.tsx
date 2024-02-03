import * as React from "react";
import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Typography,
  Modal,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Contract: React.FC = () => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  const tableData = [
    {
      id: "1",
      tenantName: "John Doe",
      dateIssued: "2024-02-01",
      expiredDate: "2024-03-01",
      propertyId: "P001",
    },
    // Add more properties as needed
  ];

  const handleAddContract = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Select the first property by default
    if (tableData.length > 0) {
      setSelectedProperty(tableData[0].propertyId);
    }
  }, [tableData]);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        style={{ marginBottom: "10px" }}
        onClick={handleAddContract}
      >
        Add Contract
      </Button>

      <Select
        value={selectedProperty}
        onChange={(event) => setSelectedProperty(event.target.value as string)}
        style={{ marginBottom: "10px", marginLeft: "10px", height: "36px" }}
        >
        {tableData.map((property) => (
            <MenuItem key={property.propertyId} value={property.propertyId}>
            {property.propertyId}
            </MenuItem>
        ))}
    </Select>

      <TableContainer component={Paper} style={{ maxWidth: "100%", overflowX: "auto" }}>
        <Table aria-label="customized table">
          <TableHead
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">Tenant Name</StyledTableCell>
              <StyledTableCell align="center">Date Issued</StyledTableCell>
              <StyledTableCell align="center">Expired Date</StyledTableCell>
              <StyledTableCell align="center">Property ID</StyledTableCell>
              <StyledTableCell align="center">View</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center">{row.id}</StyledTableCell>
                <StyledTableCell align="center">{row.tenantName}</StyledTableCell>
                <StyledTableCell align="center">{row.dateIssued}</StyledTableCell>
                <StyledTableCell align="center">{row.expiredDate}</StyledTableCell>
                <StyledTableCell align="center">{row.propertyId}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      // Handle view button click
                    }}
                  >
                    View
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Add Contract
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Contract;
