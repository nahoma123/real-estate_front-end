import { ReactNode } from "react";
import { ModalProvider } from "../../context/modal_container";
import { Box, Container, Grid } from "@mui/material";
import { SecondaryHeader } from "../presentational/header/secondary_header";

type SecondLayoutProps = {
  children: ReactNode;
  dynamicComponent?: ReactNode; // Make the dynamic component optional
};

function SecondaryLayout({ children, dynamicComponent }: SecondLayoutProps) {
  return (
    <ModalProvider>
      <Grid container height="100%">
        <Grid item md={8}>
          <SecondaryHeader />
          <Container>
            <Box marginTop={15} height="100%">
              {children}
            </Box>
          </Container>
        </Grid>
        {dynamicComponent && (
          <Grid item md={4} display="center" container justifyContent="center" alignItems="center">
            {dynamicComponent}
          </Grid>
        )}
      </Grid>
    </ModalProvider>
  );
}

export { SecondaryLayout };