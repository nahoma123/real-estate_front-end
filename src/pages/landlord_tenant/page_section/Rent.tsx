// src/Rent.tsx
import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// Define the type for rent data
interface RentData {
  "Rent Payment Date": string;
  Amount: number;
  Confirmation: boolean;
}

// Define the rent data directly in the component
const rentData: RentData = {
  "Rent Payment Date": "2024-02-01",
  Amount: 1000,
  Confirmation: true
};

const Rent: React.FC = () => {
  return (
    <div style={{ padding: 16, width:"100%" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Property</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Rent Payment Date</TableCell>
              <TableCell>{rentData["Rent Payment Date"]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell>{rentData.Amount}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Confirmation</TableCell>
              <TableCell>{String(rentData.Confirmation)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Rent;
