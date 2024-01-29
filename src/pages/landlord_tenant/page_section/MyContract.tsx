import React from 'react';
import { Paper, Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface Contract {
  ID: number;
  'Document Type': string;
  'Document Name': string;
  'Uploaded Date': string;
  'Expiry Date': string;
}

const MyContract: React.FC = () => {
  const data = [
    {
      ID: 1,
      'Document Type': 'Agreement',
      'Document Name': 'Contract XYZ',
      'Uploaded Date': '2024-02-15',
      'Expiry Date': '2024-12-31',
    },
    {
      ID: 2,
      'Document Type': 'Lease',
      'Document Name': 'Lease Agreement',
      'Uploaded Date': '2024-03-01',
      'Expiry Date': '2025-02-28',
    },
    {
      ID: 3,
      'Document Type': 'NDA',
      'Document Name': 'Non-Disclosure Agreement',
      'Uploaded Date': '2024-04-10',
      'Expiry Date': '2024-12-31',
    },
    {
      ID: 4,
      'Document Type': 'Service Agreement',
      'Document Name': 'Service Contract',
      'Uploaded Date': '2024-05-20',
      'Expiry Date': '2025-05-19',
    },
    {
      ID: 5,
      'Document Type': 'Purchase Agreement',
      'Document Name': 'Purchase Contract',
      'Uploaded Date': '2024-06-05',
      'Expiry Date': '2024-12-31',
    },
  ];

  const handleViewClick = (contract: Contract) => {

  };

  return (
    <div className='w-full m-2'>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Document Type</TableCell>
              <TableCell>Document Name</TableCell>
              <TableCell>Uploaded Date</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((contract) => (
              <TableRow key={contract.ID}>
                <TableCell>{contract.ID}</TableCell>
                <TableCell>{contract['Document Type']}</TableCell>
                <TableCell>{contract['Document Name']}</TableCell>
                <TableCell>{contract['Uploaded Date']}</TableCell>
                <TableCell>{contract['Expiry Date']}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleViewClick(contract)}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyContract;
