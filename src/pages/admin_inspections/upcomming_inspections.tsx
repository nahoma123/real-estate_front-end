import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AddCard } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import UpcomingInspectionsTable from "./inspections_table";

const UpcomingInspections: React.FC = () => {
  let navigate = useNavigate();
  return (
    <div  className="mt-36 lg:mt-2 mx-2 md:mx-12">
      <Grid container>
        <Grid>
          <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.8rem', lg: '1.8rem' }}}>Upcoming Inspections</Typography>
        </Grid>
      </Grid>
      <Box sx={{
          marginTop:'10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <UpcomingInspectionsTable />
      </Box>
    </div>
  );
};

export { UpcomingInspections };
