import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from "@mui/material/styles";
const Image = styled("img")({
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "contain",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
const FlexibleImgComponent = ({ imageUrl, alt, style, }) => {
    return _jsx(Image, { src: imageUrl, alt: alt, style: style });
};
export default FlexibleImgComponent;
