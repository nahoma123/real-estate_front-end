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
        <Grid item sm={8} md={8} lg={10}>
          <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.8rem', lg: '1.8rem' }}}>Properties</Typography>
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
