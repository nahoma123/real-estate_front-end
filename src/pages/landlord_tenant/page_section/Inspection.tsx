// Inspection.tsx

import React from 'react';
import { Paper, Table, TableBody, TableCell, TableRow, Typography, makeStyles } from '@material-ui/core';

interface InspectionProps {}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
  imageCell: {
    maxWidth: '100px',
  },
}));

const Inspection: React.FC<InspectionProps> = () => {
  const classes = useStyles();

  // Generate sample data
  const inspectionData = {
    inspectionImages: 'https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nextInspectionDate: '2024-02-01',
  }

  return (
    <div style={{width:"100%"}}>
      <Table>
        <TableBody>
          {Object.entries(inspectionData).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell>
                <Typography variant="body1">
                  <strong>{key}:</strong>
                </Typography>
              </TableCell>
              <TableCell>
                {key === 'inspectionImages' ? (
                  <img src={value} alt="Inspection Image" className={classes.imageCell} />
                ) : (
                  <Typography variant="body1">{value}</Typography>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Inspection;
