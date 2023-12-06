import React from "react";
import { Container, Typography, Link, Grid } from "@mui/material";
import { styled } from "@mui/system";
import LogoImg from '../../presentational/logo/image';

const FooterContainer = styled("footer")({
  backgroundColor: "#333",
  color: "#fff",
  padding: "16px 0",
  paddingTop: "50px",
  paddingBottom: "100px",
});

const FooterText = styled(Typography)({
  fontSize: 14,
});

const FooterLinks = styled("div")({
  marginTop: 8,
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  "& > * + *": {
    marginLeft: 16,
  },
});

const StyledLink = styled(Link)({
  padding: "10px",
  "&:hover": {
    color: "#948c1e",
  },
});

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container>
        <Grid item md={2}></Grid>
        <Grid item md={8} container justifyContent={"center"}>
          <LogoImg />
        </Grid>
        <Grid></Grid>
      </Grid>
      <Container maxWidth="lg">
        <FooterLinks>
          <StyledLink href="#" color="inherit">
            About
          </StyledLink>
          <StyledLink href="#" color="inherit">
            Services
          </StyledLink>
          <StyledLink href="#" color="inherit">
            Contact
          </StyledLink>
          <StyledLink href="#" color="inherit">
            Privacy Policy
          </StyledLink>
        </FooterLinks>
        <FooterText variant="body2" align="center">
          © {new Date().getFullYear()} Your Website. All rights reserved.
        </FooterText>

      </Container>
    </FooterContainer>
  );
};

export default Footer;
