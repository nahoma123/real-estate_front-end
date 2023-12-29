import React from "react";
import PropertiesTable from "./propertiesTable";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AddCard } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AdminProperties: React.FC = () => {
  let navigate = useNavigate();
  return (
    <div className="mt-36 lg:mt-2 mx-2 md:mx-12">
      <Grid container display={"flex"} flexWrap={"wrap"} justifyContent={"space-evenly"} alignItems={"center"}>
        <Grid item md={10}>
          <Typography fontSize={"1.9em"}>Properties</Typography>
        </Grid>

        <Grid item display={"flex"} alignItems={"center"}>
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
      <Box sx={{
          marginTop:'10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <PropertiesTable />
      </Box>
    </div>
  );
};

export { AdminProperties };
