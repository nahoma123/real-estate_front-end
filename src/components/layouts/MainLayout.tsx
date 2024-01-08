import React, { ReactNode } from "react";
import { Header } from "../presentational/header/Header";
import Footer from "./footer/footer";
import { Box } from "@mui/material";
import { ModalProvider } from "../../context/modal_container";
import FooterMain from "./footer/FooterMain";

type MainLayoutProps = {
  children: ReactNode;
};
// const StyledBox = styled(Container)({
//   marginTop: "64px", // Adjust this value to match the height of your AppBar
// });

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <ModalProvider>
        <Header />
        <Box sx={{ marginTop: "64px" }}>{children}</Box>
        <Footer />
        <FooterMain/>
      </ModalProvider>
    </div>
  );
}

export { MainLayout };
