import React from "react";
import { styled } from "@mui/material/styles";

const Image = styled("img")({
  maxHeight: "100%",
  maxWidth: "100%",
  objectFit: "contain",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

interface FlexibleImgComponentProps {
  imageUrl: string;
  alt: string;
  style?: React.CSSProperties; // Add a style prop of type React.CSSProperties
}

const FlexibleImgComponent: React.FC<FlexibleImgComponentProps> = ({
  imageUrl,
  alt,
  style,
}) => {
  return <Image src={imageUrl} alt={alt} style={style} />;
};

export default FlexibleImgComponent;