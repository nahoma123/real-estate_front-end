import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Contract from './Contract';
import Safety from './Safety';
import Communication from './Communication';
import Maintenance from './Maientance';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && (
      <Box p={2}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

const AdminManagementTabs: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Contracts" />
        <Tab label="Safety" />
        <Tab label="Communication" />
        <Tab label="Maintenance" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Contract/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Safety/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Communication/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Maintenance/>
      </TabPanel>
    </div>
  );
};

export default AdminManagementTabs;
