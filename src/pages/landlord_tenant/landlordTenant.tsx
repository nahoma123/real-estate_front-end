import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  LinearProgress,
  Grid,
  styled,
  Button,
  Card,
  CardContent,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Header } from "components/presentational/header/Header";
import HeroImg from "assets/images/hero.jpg";
import { House, Person2, Person2TwoTone, Sell } from "@mui/icons-material";
import { HubOptions } from "./hubOptions";
import { LandLordBody } from "./landlordBody";
import { Route, Routes, useParams } from "react-router-dom";
import { getRequest } from "utils/getRequest";
import { VALUATIONS } from "constants/api";

const BlackBackground = styled("div")({
  backgroundColor: "#333",
  color: "#fff",
  margin: "10px",
});

const CustomHeaderImageContainer = styled(Box)({
  height: "290px",
  backgroundImage: `linear-gradient(0deg, rgb(245, 245, 245) 20%, rgba(245, 245, 245, 0) 100%, rgb(245, 245, 245) 100%), url(${HeroImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end", // Align items to the bottom
});

const CustomBox = styled(Box)({
  backgroundColor: "white",
  padding: "10px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  marginLeft: "16px",
  marginRight: "16px",
  alignItems: "center",
});

interface DashboardProps {
  selectedButton: string;
  handleButtonChange(
    event: React.MouseEvent<HTMLElement>,
    newSelectedButton: string
  ): void;
}

const Dashboard: React.FC<DashboardProps> = ({
  selectedButton,
  handleButtonChange,
}) => {
  return (
    <Grid container>
      <Grid item xs={10}>
        <CustomHeaderImageContainer>
          <CustomBox>
            <Grid container>
              <Grid
                md={6}
                item
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <ToggleButtonGroup
                  aria-label="outlined button group"
                  exclusive
                  value={selectedButton}
                  onChange={handleButtonChange}
                >
                  <ToggleButton value="selling" aria-label="selling">
                    <House />
                    <Typography marginLeft={1}>LandLord</Typography>
                  </ToggleButton>
                  <ToggleButton value="buying" aria-label="buying">
                    <Person2TwoTone />
                    <Typography marginLeft={1}>Tenant</Typography>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid md={6}>{/* <LandLordBody /> */}</Grid>
            </Grid>
          </CustomBox>
        </CustomHeaderImageContainer>
        <LandLordBody />
      </Grid>
      <Grid xs={2}></Grid>
    </Grid>
  );
};

const FreeLetsHub: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("selling");

  const handleButtonChange = (
    event: React.MouseEvent<HTMLElement>,
    newSelectedButton: string
  ) => {
    setSelectedButton(newSelectedButton);
  };

  const params = useParams();
  let component: JSX.Element | null;
  // Use the `params.subRoute` value to render the appropriate components

  if (params.subRoute === "dashboard") {
    component = (
      <Dashboard
        handleButtonChange={handleButtonChange}
        selectedButton={selectedButton}
      />
    );
  } else {
    component = <></>;
  }

  return (
    <Box>
      <Box display={"flex"} alignContent={"center"} justifyContent={"center"}>
        <Header headerType="Type1" />
      </Box>
      <Container>
        <Grid container>
          <Grid
            item
            md={3}
            display={"flex"}
            justifyContent={"center"}
            height={"auto"}
          >
            <HubOptions />
          </Grid>
          <Grid item md={9}>
            {component}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FreeLetsHub;
