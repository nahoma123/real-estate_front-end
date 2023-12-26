import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import { Box, Grid, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import feesIcon from "../../../assets/images/fees.png";
import reviewsIcon from "../../../assets/images/reviews.png";
import faqsIcon from "../../../assets/images/faqs.png";
import evictionServiceIcon from "../../../assets/images/eviction_service.png";
import consultingServiceIcon from "../../../assets/images/consulting_service.png";
import reviews from "../../../assets/images/reviews.png";
const StyledButton = styled(Button)(({ theme }) => ({
    width: "100%",
    height: "70px",
    padding: theme.spacing(2),
    justifyContent: "flex-start",
    textTransform: "capitalize",
}));
const MenuItem = ({ label, icon, }) => (_jsxs(StyledButton, { children: [_jsx("img", { src: icon, alt: label, style: { marginRight: "10px", height: "100%" } }), _jsx(Typography, { color: "black", fontWeight: "bolder", children: label })] }));
const MenuContent = ({ anchorEl, open, onClose, }) => {
    const menuItems = [
        { label: "Fees", icon: feesIcon },
        { label: "Reviews", icon: reviewsIcon },
        { label: "FAQs", icon: faqsIcon },
        { label: "Eviction Service", icon: evictionServiceIcon },
        { label: "Consulting Service", icon: consultingServiceIcon },
    ];
    // Specify the image URL and set the width and height
    const centerImageURL = "your-image-url";
    const imageWidth = 200;
    const imageHeight = 200;
    return (_jsx(Menu, { id: "fade-menu", MenuListProps: {
            "aria-labelledby": "fade-button",
        }, anchorEl: anchorEl, open: open, onClose: onClose, TransitionComponent: Fade, marginThreshold: 0, PaperProps: {
            style: {
                width: "50%",
                maxWidth: "100%",
                left: 0,
                right: 0,
            },
        }, children: _jsxs(Grid, { container: true, children: [_jsx(Grid, { item: true, xs: 6, children: _jsx(Box, { p: 2, children: _jsx(Grid, { container: true, direction: "column", spacing: 2, children: menuItems.map((menuItem, index) => (_jsx(Grid, { item: true, children: _jsx(MenuItem
                                // xs={{ height: "50px" }}
                                , { 
                                    // xs={{ height: "50px" }}
                                    label: menuItem.label, icon: menuItem.icon }) }, index))) }) }) }), _jsx(Grid, { item: true, xs: 6, children: _jsx(Box, { display: "flex", height: "100%", justifyContent: "center", alignItems: "center", p: 2, children: _jsx("img", { src: reviews, alt: "Center Image", style: {
                                maxWidth: "100%",
                                width: imageWidth,
                                height: imageHeight,
                            } }) }) })] }) }));
};
export default MenuContent;
