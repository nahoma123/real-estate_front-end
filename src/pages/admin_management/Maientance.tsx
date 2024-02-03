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
import { Button, Typography, Modal, Box, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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

const Maintenance: React.FC = () => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const tableData = Array.from({ length: 5 }, (_, index) => ({
    id: (index + 1).toString(),
    tenantId: `T00${index + 1}`,
    propertyId: `P00${index + 1}`,
    issueType: `Issue Type ${index + 1}`,
    issueDate: "2024-02-01",
    fixed: index % 2 === 0 ? "Fixed" : "Unfixed",
    status: "Pending",
  }));

  const handleAddMaintenance = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleStatusChange = (newStatus: string) => {
    // You can handle the status change here based on the selectedRow and newStatus
    console.log(`Changing status of item ${selectedRow} to ${newStatus}`);
    handleMenuClose();
  };

  return (
    <div>
      <TableContainer component={Paper} style={{ maxWidth: "100%", overflowX: "auto" }}>
        <Table aria-label="customized table">
          <TableHead
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">Tenant ID</StyledTableCell>
              <StyledTableCell align="center">Property ID</StyledTableCell>
              <StyledTableCell align="center">Issue Type</StyledTableCell>
              <StyledTableCell align="center">Issue Date</StyledTableCell>
              <StyledTableCell align="center">Fixed</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center">{row.id}</StyledTableCell>
                <StyledTableCell align="center">{row.tenantId}</StyledTableCell>
                <StyledTableCell align="center">{row.propertyId}</StyledTableCell>
                <StyledTableCell align="center">{row.issueType}</StyledTableCell>
                <StyledTableCell align="center">{row.issueDate}</StyledTableCell>
                <StyledTableCell align="center">{row.fixed}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button onClick={(event) => handleMenuOpen(event, index)}>
                    <MoreVertIcon />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && selectedRow === index}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={() => handleStatusChange("Completed")}>
                      Completed
                    </MenuItem>
                    <MenuItem onClick={() => handleStatusChange("Pending")}>
                      Pending
                    </MenuItem>
                  </Menu>
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
            Add Maintenance
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Maintenance;
