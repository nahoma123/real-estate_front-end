import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Carousel from "react-material-ui-carousel";
import { Paper, Container, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
const CarouselItem = styled(Paper)({
    position: "relative",
    textAlign: "center", // Add this line
    "&:hover img": {
        filter: "blur(1px)",
    },
});
const CarouselImage = styled("img")({
    transition: "filter 0.5s ease-in-out",
    height: "450px", // set a fixed height
    width: "100%", // set a fixed width
});
const CarouselOverlay = styled(Grid)({
    height: "100%",
    width: "25%",
    position: "absolute",
    justifyContent: "center", // added this
    left: "7%", // changed from right to left
    top: "0%",
    textAlign: "center",
    zIndex: 2,
    padding: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
});
const AdvCarousel = () => {
    const carouselItems = [
        {
            image: "https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "We provide Free valuation",
            description: "The valuation is covered by us",
            buttonLabel: "Book Free Valuation",
        },
        {
            image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1896&q=80",
            title: "We provide Free Onboarding",
            description: "And we will alway do",
            buttonLabel: "Check our Services",
        },
        // Add more slides as needed
    ];
    return (_jsx(Container, { maxWidth: "lg", children: _jsx(Carousel, { children: carouselItems.map((item, index) => (_jsx(Item, { item: item }, index))) }) }));
};
const CarouselButton = ({ label }) => {
    return (_jsx(Button, { className: "CheckButton", variant: "contained", color: "primary", children: label }));
};
const Item = ({ item }) => {
    return (_jsxs(CarouselItem, { children: [_jsx(CarouselImage, { src: item.image, alt: item.title }), _jsxs(CarouselOverlay, { item: true, container: true, direction: "column", children: [_jsx(Grid, { children: _jsx(Typography, { variant: "h5", gutterBottom: true, color: "white", children: item.title }) }), _jsx(Grid, { children: _jsx(Typography, { variant: "body1", color: "white", children: item.description }) }), _jsx(Grid, { container: true, item: true, padding: "5px", justifyContent: "center", children: _jsx(CarouselButton, { label: item.buttonLabel }) })] })] }));
};
export default AdvCarousel;
