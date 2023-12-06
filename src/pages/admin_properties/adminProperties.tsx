import React from "react";
import PropertiesTable from "./propertiesTable";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AddCard } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AdminProperties: React.FC = () => {
  let navigate = useNavigate();
  return (
    <>
      <Grid container m={3} width={"100%"}>
        <Grid item md={10}>
          <Typography fontSize={"1.9em"}>Properties</Typography>
        </Grid>

        <Grid item md={2} display={"flex"} alignItems={"center"}>
          <Button
            variant="contained"
            onClick={() => navigate("/admin_dashboard/add_properties")}
          >
            <Box marginRight={1} alignContent={"center"}>
              <AddCard fontSize="small" />
            </Box>
            Add Properties
          </Button>
        </Grid>
      </Grid>
      <Box m={3}>
        <PropertiesTable />
      </Box>
    </>
  );
};

export { AdminProperties };
