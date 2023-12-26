import React from "react";
import ValuationsTable from "./valuationsTable";
import { Box, Divider, Typography } from "@mui/material";

const AdminValuation: React.FC = () => {
  return (
    <>
      <Box m={3}>
        <Typography fontSize={"1.9em"}>
          Valuations
        </Typography>
        <Divider />
      </Box>
      <Box m={3}>
        <ValuationsTable />
      </Box>
    </>
  );
};

export { AdminValuation };
