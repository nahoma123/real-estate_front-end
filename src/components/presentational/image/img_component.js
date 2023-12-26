import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from "@mui/material/styles";
const Image = styled("img")({
    maxHeight: "100%",
    maxWidth: "100%",
    height: "65px",
    objectFit: "contain",
});
const ImgComponent = ({ imageUrl, alt }) => {
    return _jsx(Image, { src: imageUrl, alt: alt });
};
export default ImgComponent;
