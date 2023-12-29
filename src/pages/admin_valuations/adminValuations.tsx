import React from "react";
import ValuationsTable from "./valuationsTable";
import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';


const AdminValuation: React.FC = () => {
  const theme = useTheme();

  return (
    <div className="mt-36 lg:mt-2 mx-2 md:mx-12">
      <Box>
        <Typography fontSize={"1.9em"}>
          Valuations
        </Typography>
        <Divider />
      </Box>
      <Box
        sx={{
          marginTop:'10px',
          
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <ValuationsTable />
    </Box>
    </div>
  );
};

export { AdminValuation };
