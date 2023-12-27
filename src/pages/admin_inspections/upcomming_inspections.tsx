import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AddCard } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import UpcomingInspectionsTable from "./inspections_table";

const UpcomingInspections: React.FC = () => {
  let navigate = useNavigate();
  return (
    <div  className="mt-64 lg:mt-0">
      <Grid container>
        <Grid>
          <Typography fontSize={"1.9em"}>Upcoming Inspections</Typography>
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
