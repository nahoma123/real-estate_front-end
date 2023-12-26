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
  margin: "30px",
});

const BulletPointIcon = styled("div")({
  marginRight: "8px",
});

const BulletPointText = styled(Typography)({
  fontSize: "16px", // Default font size

  // Responsive font size using Tailwind CSS
  "@media (max-width: 425px)": {
    fontSize: "10px", // Smaller font size for screens less than 425px wide (sm)
  },
  "@media (max-width: 640px)": {
    fontSize: "14px", // Smaller font size for screens less than 640px wide (sm)
  },

  "@media (min-width: 641px) and (max-width: 767px)": {
    fontSize: "12px", // Extra-small font size for screens between 641px and 767px wide (xs)
  },

  "@media (min-width: 768px) and (max-width: 1024px)": {
    fontSize: "15px", // Medium font size for screens between 768px and 1024px wide (md)
  },
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
        <p className="text-2xl lg:text-3xl font-bold">What We Can Offer You</p>
      </Typography>
      <BulletPoint
        icon={<img src={PoundIcon} alt="PoundIcon" width={20} height={16} />}
      >
        <Typography><p className="text-sm lg:text-2xl">Highest rents achieved</p></Typography>
      </BulletPoint>
      <div>
      <BulletPoint
        icon={
          <img src={InternetIcon} alt="InternetIcon" width={20} height={24} />
        }
      >
        <FlexContainer className="sm:flex-col md:flex-col lg:flex-row">
          <div className="flex flex-col">
            <Typography className="">
              <p className="text-sm lg:text-2xl">Listed on all major portals</p>
            </Typography>
          </div>
        </FlexContainer>
      </BulletPoint>
      <div className="flex flex-wrap justify-center">
              <IconImg
                src={Zoopla}
                alt="Zoopla"
                width={70}
                height={70}
                className="mt-2 lg:mt-0 lg:ml-4"
              />
              <IconImg
                src={RightMoveBlack}
                alt="RightMoveBlack"
                width={70}
                height={70}
                className="mt-2 lg:mt-0 lg:ml-4"
              />
              <IconImg
                src={SpareRoom}
                alt="Spareroom"
                width={70}
                height={70}
                className="mt-2 lg:mt-0 lg:ml-4"
              />
              <IconImg
                src={OpenRent}
                alt="OpenRent"
                width={70}
                height={70}
                className="mt-2 lg:mt-0 lg:ml-4"
              />
            </div>
      </div>

      <BulletPoint
        icon={<img src={PersonIcon} alt="Person" width={20} height={24} />}
      >
        <Typography variant="h5" className="text-sm md:text-base lg:text-lg">
        <p className="text-sm lg:text-2xl">Viewings, communication, and set up</p>
        </Typography>
      </BulletPoint>

      <BulletPoint
        icon={<img src={ContractIcon} alt="Contract" width={24} height={24} />}
      >
        <Typography variant="h5" className="text-sm md:text-base lg:text-lg">
          <p className="text-sm lg:text-2xl">
          Airtight contracts certified by the National Residential Landlords Association drawn up </p>
        </Typography>
      </BulletPoint>
    </Grid>
  </Grid>
);

export default Offers;
