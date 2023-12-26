import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import AdvCarousel from "../../components/pages/land_lord_dashboard/carousel/carousel";
import SavingsCalculator from "../../components/presentational/saving/saving";
import { OnboardingModalWrapper } from "../../components/presentational/model/onboarding_call";
import BlockBar from "../../components/pages/land_lord_dashboard/AdvBar/adv_bar";
import Offers from "../../components/presentational/offers/offers";
import { useNavigate } from "react-router-dom";
import HeroImg from "../../assets/images/hero.jpg";

const LandingPage: React.FC = () => {
  const [valuationValue, setValuationValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (valuationValue.length >= 3) {
      navigate(`/book_valuation?value=${valuationValue}`);
    } else {
      setIsInvalid(true);
    }
  };
  // Let's value your home
  return (
    <Box>
      <Container>
        <Box marginTop={15} marginBottom={15}>
          <Grid container marginTop={"10px"} marginBottom={"10px"}>
            <Grid md={5}>
            <Box>
                <Box className="sm:pt-3 md:pt-5 lg:pt-5 sm:pb-1 md:pb-2 lg:pb-2  ">
                  <Grid justifyContent={{ sm: "center", md: "left", lg: "left" }}>
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      variant="h3"
                      align="left"
                      gutterBottom
                    >
                      <p className="mt-36 md:mt-2 ">Welcome to FreeLets</p>
                    </Typography>
                    <Typography variant="h5" align="left" style={{ display: "inline" }}>
                      See how much you could save per year when you let your home for
                      <Typography
                        variant="h5"
                        align="left"
                        fontWeight="1000"
                        style={{
                          display: "inline",
                          padding: "5px",
                          color: "black",
                          backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0) calc(100% - 5px), #948c1e calc(100% - 5px), #948c1e 100%, rgba(0, 0, 0, 0) 100%)",
                        }}
                      >
                        Free
                      </Typography>
                    </Typography>
                  </Grid>
                </Box>
              </Box>
              <Container maxWidth="sm" className="my-2">
              <form
                onSubmit={handleSubmit}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      error={isInvalid}
                      helperText={isInvalid && "Please enter at least 3 characters."}
                      label="What's your postcode?"
                      value={valuationValue}
                      onChange={(event) => setValuationValue(event.target.value)}
                      variant="standard"
                      fullWidth
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          textAlign: "center",
                          justifyItems: "center",
                        },
                      }}
                      style={{
                        height: "100%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      style={{
                        borderRadius: "0px",
                        border: "2px solid #948c1e",
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Container>
            </Grid>
            <Grid md={7}>
              <Box display={"flex"}>
                <img src={HeroImg} width="100%" alt="hero"/>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* offers */}
      <BlockBar />
      <Container>
        <Grid
          container
          paddingBottom={1}
          marginTop={1}
          marginBottom={5}
          direction="row"
        >
          <Grid
            item
            md={6}
            container
            alignItems="center"
            direction="column"
            justifyContent="center"
          >
             <img
            style={{ height: "25%", margin: "10px" }}
            alt="testing1"
            src="https://strike.co.uk/static/ebb219314ad10098c1b9ade11391feb1/5d2f5/selling.webp"
          /> 

            <Typography variant="h4" align="center" textAlign={"left"}>
              See how much you could save per year when you let your home for
              free
            </Typography>
          </Grid>
          <Grid item container md={6} paddingLeft={0}>
            <SavingsCalculator />
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Offers />
      </Container>
      <Grid container paddingBottom={10}>
        <AdvCarousel />
      </Grid>
      <OnboardingModalWrapper />
    </Box>
  );
};

export default LandingPage;
