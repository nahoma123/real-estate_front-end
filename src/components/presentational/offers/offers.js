import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styled } from "@mui/system";
import { Box, Grid, Typography } from "@mui/material";
import Zoopla from "../../../assets/images/zoopla_logo.webp";
import OpenRent from "../../../assets/images/openrent-logo-blue.png";
import RightMoveBlack from "../../../assets/images/right_move_black.svg";
import SpareRoom from "../../../assets/images/spareRoom_header_logo.svg";
import PersonIcon from "../../../assets/images/user.png";
import ContractIcon from "../../../assets/images/contract.png";
import InternetIcon from "../../../assets/images/internet.png";
import PoundIcon from "../../../assets/images/pound.png";
const BulletPointContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    margin: "30px",
});
const BulletPointIcon = styled("div")({
    marginRight: "8px",
});
const BulletPointText = styled(Typography)({
    fontSize: "16px", // Default font size
    // Responsive font size using Tailwind CSS
    "@media (max-width: 425px)": {
        fontSize: "10px", // Smaller font size for screens less than 425px wide (sm)
    },
    "@media (max-width: 640px)": {
        fontSize: "14px", // Smaller font size for screens less than 640px wide (sm)
    },
    "@media (min-width: 641px) and (max-width: 767px)": {
        fontSize: "12px", // Extra-small font size for screens between 641px and 767px wide (xs)
    },
    "@media (min-width: 768px) and (max-width: 1024px)": {
        fontSize: "15px", // Medium font size for screens between 768px and 1024px wide (md)
    },
});
const IconImg = styled("img")({
    height: "90x",
    width: "90x",
    margin: "10px",
});
const FlexContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
}));
const BulletPoint = ({ icon, children }) => (_jsxs(BulletPointContainer, { children: [_jsx(BulletPointIcon, { children: icon }), _jsx(BulletPointText, { children: children })] }));
const Offers = () => (_jsxs(Grid, { marginTop: 10, marginBottom: 10, container: true, children: [_jsx(Grid, { md: 6 }), _jsxs(Grid, { md: 6, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, fontWeight: 600, sx: { color: "black" }, children: _jsx("p", { className: "text-2xl lg:text-3xl font-bold", children: "What We Can Offer You" }) }), _jsx(BulletPoint, { icon: _jsx("img", { src: PoundIcon, alt: "PoundIcon", width: 20, height: 16 }), children: _jsx(Typography, { children: _jsx("p", { className: "text-sm lg:text-2xl", children: "Highest rents achieved" }) }) }), _jsxs("div", { children: [_jsx(BulletPoint, { icon: _jsx("img", { src: InternetIcon, alt: "InternetIcon", width: 20, height: 24 }), children: _jsx(FlexContainer, { className: "sm:flex-col md:flex-col lg:flex-row", children: _jsx("div", { className: "flex flex-col", children: _jsx(Typography, { className: "", children: _jsx("p", { className: "text-sm lg:text-2xl", children: "Listed on all major portals" }) }) }) }) }), _jsxs("div", { className: "flex flex-wrap justify-center", children: [_jsx(IconImg, { src: Zoopla, alt: "Zoopla", width: 70, height: 70, className: "mt-2 lg:mt-0 lg:ml-4" }), _jsx(IconImg, { src: RightMoveBlack, alt: "RightMoveBlack", width: 70, height: 70, className: "mt-2 lg:mt-0 lg:ml-4" }), _jsx(IconImg, { src: SpareRoom, alt: "Spareroom", width: 70, height: 70, className: "mt-2 lg:mt-0 lg:ml-4" }), _jsx(IconImg, { src: OpenRent, alt: "OpenRent", width: 70, height: 70, className: "mt-2 lg:mt-0 lg:ml-4" })] })] }), _jsx(BulletPoint, { icon: _jsx("img", { src: PersonIcon, alt: "Person", width: 20, height: 24 }), children: _jsx(Typography, { variant: "h5", className: "text-sm md:text-base lg:text-lg", children: _jsx("p", { className: "text-sm lg:text-2xl", children: "Viewings, communication, and set up" }) }) }), _jsx(BulletPoint, { icon: _jsx("img", { src: ContractIcon, alt: "Contract", width: 24, height: 24 }), children: _jsx(Typography, { variant: "h5", className: "text-sm md:text-base lg:text-lg", children: _jsx("p", { className: "text-sm lg:text-2xl", children: "Airtight contracts certified by the National Residential Landlords Association drawn up " }) }) })] })] }));
export default Offers;
