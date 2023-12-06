import React, { useEffect, useState } from "react";
import { Box, Link, Typography, styled, Grid, Rating } from "@mui/material";
import Zoopla from "../../../../assets/images/zoopla_logo.webp";
import OpenRent from "../../../../assets/images/openrent-logo-blue.png";
import RightMove from "../../../../assets/images/right_move.svg";
import SpareRoom from "../../../../assets/images/spareRoom_header_logo.svg";
import TrustPilot from "../../../../assets/images/trust_pilot.svg";
import StarIcon from "@mui/icons-material/Star";

const Bar = styled(Box)(({ theme }) => ({
  backgroundColor: "#333",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  paddingBottom: "30px",
  paddingTop: "30px",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flex: 1,
}));

const Logo = styled("img")(({ theme }) => ({
  marginRight: theme.spacing(2),
  height: 30,
}));

const TrustpilotLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
}));

const BlockBar: React.FC = () => {
  const [trustpilotRating, setTrustpilotRating] = useState<number | null>(null);
  useEffect(() => {
    setTrustpilotRating(4.5);
  });

  useEffect(() => {
    setTrustpilotRating(4.5);
    // Simulating an asynchronous fetch of the Trustpilot rating
    const fetchRating = async () => {
      try {
        // Replace this fetch implementation with your actual API call to fetch the Trustpilot rating
        const response = await fetch("https://example.com/trustpilot-rating");
        const data = await response.json();
        const rating = data.rating; // Replace with the actual rating field from the response
        setTrustpilotRating(rating);
      } catch (error) {
        console.error("Failed to fetch Trustpilot rating:", error);
        setTrustpilotRating(null); // Set rating to null if fetch fails
      }
    };

    fetchRating();
  }, []);

  return (
    <Bar marginTop={2} marginBottom={2} paddingLeft="50px" paddingRight="50px">
      <Grid container>
        <Grid md={1} xs={0} sm={0}></Grid>
        <Grid md={10}>
          <LogoContainer>
            <Logo src={Zoopla} alt="Zoopla" />
            <Logo src={RightMove} alt="Rightmove" />
            <Logo src={OpenRent} alt="OpenRent" />
            <Logo src={SpareRoom} alt="SpareRoom" />
            <TrustpilotLink
              href="https://www.trustpilot.com/reviews/your-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo src={TrustPilot} alt="TrustPilot" />
              <Rating
                name="trustpilot-rating"
                value={trustpilotRating}
                readOnly
                precision={0.25}
                emptyIcon={<StarIcon style={{ color: "white" }} />}
              />
            </TrustpilotLink>
          </LogoContainer>
        </Grid>
        <Grid md={1} xs={0} sm={0}></Grid>
      </Grid>
    </Bar>
  );
};

export default BlockBar;
