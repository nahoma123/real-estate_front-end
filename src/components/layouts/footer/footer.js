import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(FooterContainer, { children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Grid, { container: true, justifyContent: "center", spacing: 2, children: [_jsx(Grid, { item: true, xs: 12, sm: 6, md: 3, lg: 3, children: _jsx(LogoImg, {}) }), _jsx(Grid, { item: true, xs: 12, sm: 6, md: 6, lg: 6, children: _jsxs(FooterLinks, { children: [_jsx(StyledLink, { href: "#", color: "inherit", children: "About" }), _jsx(StyledLink, { href: "#", color: "inherit", children: "Services" }), _jsx(StyledLink, { href: "#", color: "inherit", children: "Contact" }), _jsx(StyledLink, { href: "#", color: "inherit", children: "Privacy Policy" })] }) }), _jsx(Grid, { item: true, xs: 12, sm: 12, md: 3, lg: 3, children: _jsxs(FooterText, { variant: "body2", align: "center", children: ["\u00A9 ", new Date().getFullYear(), " Your Website. All rights reserved."] }) })] }) }) }));
};
export default Footer;
