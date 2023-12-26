import React from "react";
import { styled } from "@mui/material/styles";

const Image = styled("img")({
  maxHeight: "100%",
  maxWidth: "100%",
  height: "65px",
  objectFit: "contain",
});

interface ImgComponentProps {
  imageUrl: string;
  alt: string;
}

const ImgComponent: React.FC<ImgComponentProps> = ({ imageUrl, alt }) => {
  return <Image src={imageUrl} alt={alt} />;
};

export default ImgComponent;
