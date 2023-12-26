import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Container, Typography, Box, Grid, TextField, Button, } from "@mui/material";
import AdvCarousel from "../../components/pages/land_lord_dashboard/carousel/carousel";
import SavingsCalculator from "../../components/presentational/saving/saving";
import { OnboardingModalWrapper } from "../../components/presentational/model/onboarding_call";
import BlockBar from "../../components/pages/land_lord_dashboard/AdvBar/adv_bar";
import Offers from "../../components/presentational/offers/offers";
import { useNavigate } from "react-router-dom";
import HeroImg from "../../assets/images/hero.jpg";
const LandingPage = () => {
    const [valuationValue, setValuationValue] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (valuationValue.length >= 3) {
            navigate(`/book_valuation?value=${valuationValue}`);
        }
        else {
            setIsInvalid(true);
        }
    };
    // Let's value your home
    return (_jsxs(Box, { children: [_jsx(Container, { children: _jsx(Box, { marginTop: 15, marginBottom: 15, children: _jsxs(Grid, { container: true, marginTop: "10px", marginBottom: "10px", children: [_jsxs(Grid, { md: 5, children: [_jsx(Box, { children: _jsx(Box, { className: "sm:pt-3 md:pt-5 lg:pt-5 sm:pb-1 md:pb-2 lg:pb-2", children: _jsxs(Grid, { justifyContent: { sm: "center", md: "left", lg: "left" }, children: [_jsx(Typography, { sx: { fontWeight: "bold" }, variant: "h3", align: "left", gutterBottom: true, children: "Welcome to FreeLets" }), _jsxs(Typography, { variant: "h5", align: "left", style: { display: "inline" }, children: ["See how much you could save per year when you let your home for", _jsx(Typography, { variant: "h5", align: "left", fontWeight: "1000", style: {
                                                                    display: "inline",
                                                                    padding: "5px",
                                                                    color: "black",
                                                                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) calc(100% - 5px), #948c1e calc(100% - 5px), #948c1e 100%, rgba(0, 0, 0, 0) 100%)",
                                                                }, children: "Free" })] })] }) }) }), _jsx(Container, { maxWidth: "sm", className: "my-2", children: _jsx("form", { onSubmit: handleSubmit, style: {
                                                border: "1px solid #ccc",
                                                padding: "10px",
                                            }, children: _jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { item: true, xs: 12, sm: 8, children: _jsx(TextField, { error: isInvalid, helperText: isInvalid && "Please enter at least 3 characters.", label: "What's your postcode?", value: valuationValue, onChange: (event) => setValuationValue(event.target.value), variant: "standard", fullWidth: true, InputProps: {
                                                                disableUnderline: true,
                                                                style: {
                                                                    textAlign: "center",
                                                                    justifyItems: "center",
                                                                },
                                                            }, style: {
                                                                height: "100%",
                                                            } }) }), _jsx(Grid, { item: true, xs: 12, sm: 4, children: _jsx(Button, { type: "submit", variant: "contained", color: "primary", fullWidth: true, style: {
                                                                borderRadius: "0px",
                                                                border: "2px solid #948c1e",
                                                            }, children: "Submit" }) })] }) }) })] }), _jsx(Grid, { md: 7, children: _jsx(Box, { display: "flex", children: _jsx("img", { src: HeroImg, width: "100%", alt: "hero" }) }) })] }) }) }), _jsx(BlockBar, {}), _jsx(Container, { children: _jsxs(Grid, { container: true, paddingBottom: 1, marginTop: 1, marginBottom: 5, direction: "row", children: [_jsxs(Grid, { item: true, md: 6, container: true, alignItems: "center", direction: "column", justifyContent: "center", children: [_jsx("img", { style: { height: "25%", margin: "10px" }, alt: "testing1", src: "https://strike.co.uk/static/ebb219314ad10098c1b9ade11391feb1/5d2f5/selling.webp" }), _jsx(Typography, { variant: "h4", align: "center", textAlign: "left", children: "See how much you could save per year when you let your home for free" })] }), _jsx(Grid, { item: true, container: true, md: 6, paddingLeft: 0, children: _jsx(SavingsCalculator, {}) })] }) }), _jsx(Container, { children: _jsx(Offers, {}) }), _jsx(Grid, { container: true, paddingBottom: 10, children: _jsx(AdvCarousel, {}) }), _jsx(OnboardingModalWrapper, {})] }));
};
export default LandingPage;
