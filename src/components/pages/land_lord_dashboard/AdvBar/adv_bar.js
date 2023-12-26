import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Box, Link, styled, Grid, Rating } from "@mui/material";
import Zoopla from "../../../../assets/images/zoopla_logo.webp";
import OpenRent from "../../../../assets/images/openrent-logo-blue.png";
import RightMove from "../../../../assets/images/right_move.svg";
import SpareRoom from "../../../../assets/images/spareRoom_header_logo.svg";
import TrustPilot from "../../../../assets/images/trust_pilot.svg";
import StarIcon from "@mui/icons-material/Star";
const Bar = styled(Box)(({ theme }) => ({
    backgroundColor: "#333",
    display: "flex",
    alignItems: "center",
    justifyContent: "",
    padding: theme.spacing(2),
    paddingBottom: "30px",
    paddingTop: "30px",
}));
const LogoContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Center-align the logos
    flex: 1,
}));
const Logo = styled("img")(({ theme }) => ({
    marginRight: theme.spacing(2),
    height: 30,
}));
const TrustpilotLink = styled(Link)(({ theme }) => ({
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
}));
const BlockBar = () => {
    const [trustpilotRating, setTrustpilotRating] = useState(null);
    useEffect(() => {
        setTrustpilotRating(4.5);
    });
    useEffect(() => {
        setTrustpilotRating(4.5);
        // Simulating an asynchronous fetch of the Trustpilot rating
        const fetchRating = async () => {
            try {
                // Replace this fetch implementation with your actual API call to fetch the Trustpilot rating
                const response = await fetch("https://example.com/trustpilot-rating");
                const data = await response.json();
                const rating = data.rating; // Replace with the actual rating field from the response
                setTrustpilotRating(rating);
            }
            catch (error) {
                console.error("Failed to fetch Trustpilot rating:", error);
                setTrustpilotRating(null); // Set rating to null if fetch fails
            }
        };
        fetchRating();
    }, []);
    return (_jsx(Bar, { marginTop: 2, marginBottom: 2, className: "sm:pl-5 sm:pr-5 md:pl-10 md:pr-10 lg:pl-20 lg:pr-20", children: _jsxs(Grid, { container: true, children: [_jsx(Grid, { md: 1, xs: 0, sm: 0 }), _jsx(Grid, { md: 10, xs: 12, sm: 12, lg: 10, children: _jsxs(LogoContainer, { className: "flex-wrap ", children: [_jsx(Logo, { src: Zoopla, alt: "Zoopla", className: "mb-2 sm:mb-0" }), _jsx(Logo, { src: RightMove, alt: "Rightmove", className: "mb-2 sm:mb-0" }), _jsx(Logo, { src: OpenRent, alt: "OpenRent", className: "mb-2 sm:mb-0" }), _jsx(Logo, { src: SpareRoom, alt: "SpareRoom", className: "mb-2 sm:mb-0" }), _jsxs(TrustpilotLink, { href: "https://www.trustpilot.com/reviews/your-website", target: "_blank", rel: "noopener noreferrer", className: "mb-2 sm:mb-0", children: [_jsx(Logo, { src: TrustPilot, alt: "TrustPilot", className: "mr-2" }), _jsx(Rating, { name: "trustpilot-rating", value: trustpilotRating, readOnly: true, precision: 0.25, emptyIcon: _jsx(StarIcon, { style: { color: "white" } }) })] })] }) }), _jsx(Grid, { md: 1, xs: 0, sm: 0 })] }) }));
};
export default BlockBar;
