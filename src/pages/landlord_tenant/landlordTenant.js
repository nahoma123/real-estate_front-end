import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Container, Box, Typography, Grid, styled, ToggleButton, ToggleButtonGroup, } from "@mui/material";
import { Header } from "../../components/presentational/header/Header";
import HeroImg from "../../assets/images/hero.jpg";
import { House, Person2TwoTone } from "@mui/icons-material";
import { HubOptions } from "./hubOptions";
import { LandLordBody } from "./landlordBody";
import { useParams } from "react-router-dom";
const BlackBackground = styled("div")({
    backgroundColor: "#333",
    color: "#fff",
    margin: "10px",
});
const CustomHeaderImageContainer = styled(Box)({
    height: "290px",
    backgroundImage: `linear-gradient(0deg, rgb(245, 245, 245) 20%, rgba(245, 245, 245, 0) 100%, rgb(245, 245, 245) 100%), url(${HeroImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end", // Align items to the bottom
});
const CustomBox = styled(Box)({
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    marginLeft: "16px",
    marginRight: "16px",
    alignItems: "center",
});
const Dashboard = ({ selectedButton, handleButtonChange, }) => {
    return (_jsxs(Grid, { container: true, children: [_jsxs(Grid, { item: true, xs: 10, children: [_jsx(CustomHeaderImageContainer, { children: _jsx(CustomBox, { children: _jsxs(Grid, { container: true, children: [_jsx(Grid, { md: 6, item: true, display: "flex", alignItems: "center", justifyContent: "center", children: _jsxs(ToggleButtonGroup, { "aria-label": "outlined button group", exclusive: true, value: selectedButton, onChange: handleButtonChange, children: [_jsxs(ToggleButton, { value: "selling", "aria-label": "selling", children: [_jsx(House, {}), _jsx(Typography, { marginLeft: 1, children: "LandLord" })] }), _jsxs(ToggleButton, { value: "buying", "aria-label": "buying", children: [_jsx(Person2TwoTone, {}), _jsx(Typography, { marginLeft: 1, children: "Tenant" })] })] }) }), _jsx(Grid, { md: 6 })] }) }) }), _jsx(LandLordBody, {})] }), _jsx(Grid, { xs: 2 })] }));
};
const FreeLetsHub = () => {
    const [selectedButton, setSelectedButton] = useState("selling");
    const handleButtonChange = (event, newSelectedButton) => {
        setSelectedButton(newSelectedButton);
    };
    const params = useParams();
    let component;
    // Use the `params.subRoute` value to render the appropriate components
    if (params.subRoute === "dashboard") {
        component = (_jsx(Dashboard, { handleButtonChange: handleButtonChange, selectedButton: selectedButton }));
    }
    else {
        component = _jsx(_Fragment, {});
    }
    return (_jsxs(Box, { children: [_jsx(Box, { display: "flex", alignContent: "center", justifyContent: "center", children: _jsx(Header, { headerType: "Type1" }) }), _jsx(Container, { children: _jsxs(Grid, { container: true, children: [_jsx(Grid, { item: true, md: 3, display: "flex", justifyContent: "center", height: "auto", children: _jsx(HubOptions, {}) }), _jsx(Grid, { item: true, md: 9, children: component })] }) })] }));
};
export default FreeLetsHub;
