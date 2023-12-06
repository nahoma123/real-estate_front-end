import React from "react";
import styled from "@emotion/styled";
import Logo from '../../../assets/images/thumb_freelets.png'; // Import the image file
import { useNavigate } from "react-router-dom";


const PictureContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
`;

const Picture = styled.img`
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 80px;
  object-fit: contain;
`;

const LogoImg = () => {
  const navigate = useNavigate();
  return (
    <PictureContainer>
      <Picture src={Logo} alt="logo Image" onClick={() => navigate("/")} />
    </PictureContainer>
  );
};

export default LogoImg;
