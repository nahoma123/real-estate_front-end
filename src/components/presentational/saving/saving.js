import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Slider, Typography, Paper, Box, Grid, FormControl, Select, MenuItem, Divider, } from "@mui/material";
import { primaryColor } from "../../../styles/color";
import Wallet from "../../../assets/images/wallet.png";
import ImgComponent from "../image/img_component";
const SavingsCalculator = () => {
    const [propertyValue, setPropertyValue] = useState(3500);
    const [commissionRate, setCommissionRate] = useState(0.1);
    const tenancyFeeMultiplier = 4;
    const calculateSavings = () => {
        const rentalIncome = propertyValue;
        const commissionAmount = rentalIncome * commissionRate;
        const tenancyFeeAmount = rentalIncome * tenancyFeeMultiplier;
        const savings = rentalIncome * 12 - commissionAmount - tenancyFeeAmount;
        return savings.toFixed(2);
    };
    const handleSliderChange = (event, newValue) => {
        setPropertyValue(newValue);
    };
    const handleCommissionChange = (event) => {
        setCommissionRate(event.target.value);
    };
    return (_jsxs(Paper, { elevation: 3, className: "p-4 mt-5 min-w-full text-center", children: [_jsxs(Box, { className: "mt-5", children: [_jsx(Typography, { variant: "h6", display: "inline", children: "Savings based on a high street commission of" }), _jsx(Typography, { display: "inline", className: "font-bold", children: "(10%, 11%, 12%, 13%, 14%, 15%)" }), _jsx(Typography, { variant: "h6", display: "inline", children: "and initial tenancy fees of 4 weeks rent:" })] }), _jsx(Box, { className: "mt-2", children: _jsx(Divider, {}) }), _jsxs(Box, { className: "mt-2", children: [_jsx(Typography, { variant: "h6", gutterBottom: true, children: "Slide to set your predicted monthly rental income (Beginning at 300 and ending at 10000):" }), _jsx(Grid, { container: true, justifyContent: "center", children: _jsx(Grid, { item: true, md: 12, sm: 12, children: _jsx(Slider, { className: "pt-8", value: propertyValue, min: 300, max: 10000, step: 100, onChange: handleSliderChange, valueLabelDisplay: "auto", "aria-label": "Property Value" }) }) })] }), _jsx(Box, { className: "mt-2", children: _jsxs(Grid, { container: true, alignItems: "center", justifyContent: "center", children: [_jsx(Grid, { item: true, xs: 12, sm: 9, md: 9, children: _jsxs(Typography, { variant: "h3", className: `font-bold text-${primaryColor}`, children: ["\u00A3", calculateSavings()] }) }), _jsx(Grid, { item: true, xs: 12, sm: 3, md: 3, style: { maxWidth: "100%", height: "auto" }, children: _jsx(ImgComponent, { imageUrl: Wallet, alt: "wallet img" }) })] }) }), _jsx(Box, { className: "mt-2", children: _jsxs(FormControl, { fullWidth: true, children: [_jsx(Box, { className: "mt-2", children: _jsxs(Typography, { variant: "h6", gutterBottom: true, children: ["Commission Rate: ", commissionRate * 100, "%"] }) }), _jsxs(Select, { value: commissionRate, onChange: handleCommissionChange, variant: "outlined", "aria-label": "Commission Rate", className: "w-full", children: [_jsx(MenuItem, { value: 0.1, children: "10%" }), _jsx(MenuItem, { value: 0.11, children: "11%" }), _jsx(MenuItem, { value: 0.12, children: "12%" }), _jsx(MenuItem, { value: 0.13, children: "13%" }), _jsx(MenuItem, { value: 0.14, children: "14%" }), _jsx(MenuItem, { value: 0.15, children: "15%" })] })] }) })] }));
};
export default SavingsCalculator;
