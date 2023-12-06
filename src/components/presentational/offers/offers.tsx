import React from "react";
import { styled } from "@mui/system";
import { Box, Grid, Typography } from "@mui/material";
import Zoopla from "../../../assets/images/zoopla_logo.webp";
import OpenRent from "../../../assets/images/openrent-logo-blue.png";
import RightMove from "../../../assets/images/right_move.svg";
import RightMoveBlack from "../../../assets/images/right_move_black.svg";
import SpareRoom from "../../../assets/images/spareRoom_header_logo.svg";
import TrustPilot from "../../../assets/images/trust_pilot.svg";
import PersonIcon from "../../../assets/images/user.png";
import ContractIcon from "../../../assets/images/contract.png";
import InternetIcon from "../../../assets/images/internet.png";
import PoundIcon from "../../../assets/images/pound.png";

interface BulletPointProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const BulletPointContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  // marginBottom: "8px",
  margin: "30px",
});

const BulletPointIcon = styled("div")({
  marginRight: "8px",
});

const BulletPointText = styled(Typography)({
  fontSize: "16px",
});

const IconImg = styled("img")({
  height: "90x",
  width: "90x",
  margin: "10px",
});

const FlexContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flex: 1,
}));

const BulletPoint: React.FC<BulletPointProps> = ({ icon, children }) => (
  <BulletPointContainer>
    <BulletPointIcon>{icon}</BulletPointIcon>
    <BulletPointText>{children}</BulletPointText>
  </BulletPointContainer>
);

const Offers: React.FC = () => (
  <Grid marginTop={10} marginBottom={10} container>
    <Grid md={6}></Grid>
    <Grid md={6}>
      <Typography
        variant="h4"
        gutterBottom
        fontWeight={600}
        sx={{ color: "black" }}
      >
        What We Can Offer You
      </Typography>
      <BulletPoint
        // sx={{ color: "white" }}
        icon={<img src={PoundIcon} alt="PoundIcon" width={24} height={24} />}
      >
        <Typography variant="h5">Highest rents achieved</Typography>
      </BulletPoint>
      <BulletPoint
        icon={
          <img src={InternetIcon} alt="InternetIcon" width={24} height={24} />
        }
      >
        <FlexContainer>
          <Typography variant="h5">Listed on all major portals</Typography>
          <IconImg
            src={Zoopla}
            alt="Zoopla"
            width={70}
            height={70}
            style={{ marginLeft: "20px" }}
          />
          <IconImg
            src={RightMoveBlack}
            alt="RightMoveBlack"
            width={70}
            height={70}
          />
          <IconImg src={SpareRoom} alt="Spareroom" width={70} height={70} />
          <IconImg src={OpenRent} alt="OpenRent" width={70} height={70} />
        </FlexContainer>
      </BulletPoint>
      <BulletPoint
        icon={<img src={PersonIcon} alt="Person" width={24} height={24} />}
      >
        <Typography variant="h5">
          Viewings, communication, and set up
        </Typography>
      </BulletPoint>
      <BulletPoint
        icon={<img src={ContractIcon} alt="Contract" width={24} height={24} />}
      >
        <Typography variant="h5">
          Airtight contracts certified by the National Residential Landlords
          Association drawn up
        </Typography>
      </BulletPoint>
    </Grid>
  </Grid>
);

export default Offers;
