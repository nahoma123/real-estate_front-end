import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AddCard } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import UpcomingInspectionsTable from "./inspections_table";

const UpcomingInspections: React.FC = () => {
  let navigate = useNavigate();
  return (
    <>
      <Grid container m={3} width={"100%"}>
        <Grid item md={10}>
          <Typography fontSize={"1.9em"}>Upcoming Inspections</Typography>
        </Grid>
      </Grid>
      <Box m={3}>
        <UpcomingInspectionsTable />
      </Box>
    </>
  );
};

export { UpcomingInspections };
