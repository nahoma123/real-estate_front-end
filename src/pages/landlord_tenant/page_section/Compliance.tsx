// src/Compliance.tsx
import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// Define the type for compliance data
interface ComplianceData {
  "Gas Safety Date Due": string;
  "Gas Image": string;
  "Electricity Due": string;
  "Electricity Image": string;
}

// Define the compliance data directly in the component
const complianceData: ComplianceData = {
  "Gas Safety Date Due": "2024-05-01",
  "Gas Image": "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Electricity Due": "2024-06-01",
  "Electricity Image": "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

const Compliance: React.FC = () => {
  return (
    <div style={{ padding: 16, width:"100%" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Compliance Item</TableCell>
              <TableCell>Due Date / Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Gas Safety Date Due</TableCell>
              <TableCell>{complianceData["Gas Safety Date Due"]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gas Image</TableCell>
              <TableCell><img src={complianceData["Gas Image"]} alt="Inspection Image" style={{width:"80px"}} /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Electricity Due</TableCell>
              <TableCell>{complianceData["Electricity Due"]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Electricity Image</TableCell>
              <TableCell><img src={complianceData["Electricity Image"]} alt="Inspection Image" style={{width:"80px"}} /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Compliance;
