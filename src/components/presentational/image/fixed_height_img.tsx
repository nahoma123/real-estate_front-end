import React from "react";
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

interface ImgFixedHeightProps {
  imageUrl: string;
}

const ImgFixedHeight: React.FC<ImgFixedHeightProps> = ({ imageUrl }) => {
  return (
    <Box>
      {/* Your other components */}
      <ImageWrapper>
        <Image src={imageUrl} alt="Your Image" />
      </ImageWrapper>
      {/* Your other components */}
    </Box>
  );
};

export default ImgFixedHeight;
