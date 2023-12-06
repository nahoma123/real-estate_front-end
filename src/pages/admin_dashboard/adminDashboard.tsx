import { Header } from "components/presentational/header/Header";
import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AdminValuation } from "pages/admin_valuations/adminValuations";

const AdminDashboard: React.FC = () => {
  // Use the `params.subRoute` value to render the appropriate components
  return (
    <Box>
      <Box display={"flex"} alignContent={"center"} justifyContent={"center"}>
        <Header headerType="Type1" />
      </Box>
      <Container>
        <Grid container>
          <AdminValuation />
        </Grid>
      </Container>
    </Box>
  );
};

export { AdminDashboard };
