import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography, } from "@mui/material";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { useNavigate } from "react-router-dom";
const PropertyCard = ({ property }) => {
    const images = property.images.split(",");
    const [mainImage, ...remainingImages] = images;
    const navigate = useNavigate();
    useEffect(() => {
        console.log("property", property);
    }, []);
    return (_jsxs(Card, { sx: { marginBottom: 3 }, children: [mainImage && (_jsx(CardMedia, { component: "img", sx: { width: "100%" }, image: mainImage, alt: `Main Image`, onError: (e) => {
                    e.currentTarget.src = ""; // Set an empty source for broken image links
                } })), _jsx(Box, { display: "flex", flexWrap: "wrap", justifyContent: "center", children: remainingImages.map((image, index) => (_jsx(Card, { sx: {
                        width: "20%",
                        padding: "5px",
                        marginBottom: 1,
                        borderRadius: "0px",
                    }, children: _jsx(CardMedia, { component: "img", sx: { width: "100%", objectFit: "cover" }, image: image, alt: `Image ${index + 2}`, onError: (e) => {
                            e.currentTarget.src = ""; // Set an empty source for broken image links
                        } }) }, index))) }), _jsxs(CardContent, { children: [_jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [_jsxs(Box, { children: [_jsxs(Typography, { variant: "h5", component: "div", display: "inline", fontWeight: "bolder", children: [_jsx(CurrencyPoundIcon, {}), " ", property.amount] }), _jsx(Typography, { display: "inline", paddingLeft: 1, variant: "h6", fontWeight: "bolder", children: "pcm" })] }), _jsxs(Box, { children: [_jsxs(Typography, { variant: "body1", component: "div", textAlign: "right", children: ["Reception: ", property.reception_number] }), _jsxs(Typography, { variant: "body1", component: "div", textAlign: "right", children: ["Beds: ", property.bed_number] }), _jsxs(Typography, { variant: "body1", component: "div", textAlign: "right", children: ["Bath Rooms: ", property.bath_number] })] })] }), _jsx(Box, { children: _jsxs(Typography, { variant: "h6", component: "div", children: ["Address: ", property.address] }) }), _jsx(Box, { children: _jsxs(Typography, { variant: "body1", component: "div", children: ["Property Type: ", property.property_type] }) }), _jsx(Box, { marginTop: 2, children: _jsx(Button, { fullWidth: true, variant: "outlined", onClick: () => navigate(`/property_details/${property.property_id}`), children: "View More" }) })] })] }, property.address));
};
export default PropertyCard;
