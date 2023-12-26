import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
const ImageWrapper = styled("div")({
    width: "100%",
    maxHeight: "500px", // Set your desired height here
});
const Image = styled("img")({
    width: "100%",
    height: "auto",
});
const ImgFixedHeight = ({ imageUrl }) => {
    return (_jsx(Box, { children: _jsx(ImageWrapper, { children: _jsx(Image, { src: imageUrl, alt: "Your Image" }) }) }));
};
export default ImgFixedHeight;
