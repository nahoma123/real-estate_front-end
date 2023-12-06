import React from "react";
import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StyledMegaMenu = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(2),
  width: "900px",
  height: "500px",
}));

const MegaMenu: React.FC = () => {
  return (
    <StyledMegaMenu>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography variant="h6">Category 1</Typography>
          <ul>
          </ul>
        </Grid>
        <Grid item xs={9}>

        </Grid>
      </Grid>
    </StyledMegaMenu>
  );
};

export default MegaMenu;
