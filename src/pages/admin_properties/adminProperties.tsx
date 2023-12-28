import React from "react";
import PropertiesTable from "./propertiesTable";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AddCard } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AdminProperties: React.FC = () => {
  let navigate = useNavigate();
  return (
    <div className="mt-56 lg:mt-2">
      <Grid container width={"100%"}>
        <div className="flex flex-wrap justify-center flex-col md:flex-row items-center w-full">
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
        </div>
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
