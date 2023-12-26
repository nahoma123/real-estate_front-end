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
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <LogoImg />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
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
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FooterText variant="body2" align="center">
              © {new Date().getFullYear()} Your Website. All rights reserved.
            </FooterText>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
