// Maintenance.tsx

import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

interface MaintenanceItem {
  ID: number;
  reportedDate: string;
  issue: string;
  description: string;
}

const Maintenance: React.FC = () => {
  const maintenanceData: MaintenanceItem[] = [
    { ID: 1, reportedDate: '2024-01-29', issue: 'Network Outage', description: 'Users experiencing connectivity issues' },
    { ID: 2, reportedDate: '2024-01-30', issue: 'Server Downtime', description: 'System maintenance in progress' },
    { ID: 3, reportedDate: '2024-02-01', issue: 'Software Bug', description: 'Application crashes on certain inputs' },
    { ID: 4, reportedDate: '2024-02-05', issue: 'Database Error', description: 'Data inconsistency reported by users' },
    { ID: 5, reportedDate: '2024-02-10', issue: 'Security Vulnerability', description: 'Potential security threat detected' },
    { ID: 6, reportedDate: '2024-02-15', issue: 'UI Glitch', description: 'Incorrect rendering of elements in the UI' },
    { ID: 7, reportedDate: '2024-02-20', issue: 'Performance Degradation', description: 'Sluggish response times observed' },
    { ID: 8, reportedDate: '2024-02-25', issue: 'Login Issues', description: 'Users unable to log in to the system' },
    { ID: 9, reportedDate: '2024-03-01', issue: 'Email Notification Failure', description: 'Emails not being sent to users' },
    { ID: 10, reportedDate: '2024-03-05', issue: 'Mobile App Crashes', description: 'App crashes reported on mobile devices' },
  ];

  return (
    <div className='m-2 w-full'>
        <TableContainer>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Reported Date</TableCell>
                <TableCell>Issue</TableCell>
                <TableCell>Descriptions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {maintenanceData.map((item) => (
                <TableRow key={item.ID}>
                <TableCell>{item.ID}</TableCell>
                <TableCell>{item.reportedDate}</TableCell>
                <TableCell>{item.issue}</TableCell>
                <TableCell>{item.description}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
};

export default Maintenance;
