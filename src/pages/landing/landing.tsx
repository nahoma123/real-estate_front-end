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
import WhyChoose from "./WhyChoose";

  const imageUrl = 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const topImageUrl = 'https://images.unsplash.com/photo-1592506119503-c0b18879bd5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  const imageUrlSecond = 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  
  const divStyleMain = {
    backgroundImage: `url('${topImageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };

  const divStyle = {
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };
  const divStyleSecond = {
    backgroundImage: `url('${topImageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',  // Set the height to '100%' or adjust as needed
  };


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
        <div style={{ ...divStyleMain, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className="mt-48 md:mt-2 ">
          <Container>
            <Box marginTop={15} marginBottom={15} >
              <Grid container marginTop={"10px"} marginBottom={"10px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Grid item sx={{ width:"100%"}} >
                  <Box>
                    <Box className="sm:pt-3 md:pt-5 lg:pt-5 sm:pb-1 md:pb-2 lg:pb-2">
                    <Grid container justifyContent={{ sm: "center", md: "center", lg: "center" }} alignItems="center">
                      <Typography sx={{ fontWeight: "bold" }} variant="h4" align="center" gutterBottom>
                        <p className="mt-20 md:mt-2 ">Welcome to FreeLets</p>
                      </Typography>
                      <Typography variant="h5" align="center" style={{ display: "inline" }}>
                        See how much you could save per year when you let your home for
                        <Typography
                          variant="h5"
                          align="center"
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
                  <Box marginTop={8} marginBottom={2}  sx={{ textAlign: "center" }}>
                    <form onSubmit={handleSubmit} >
                      <Grid container alignItems="center" justifyContent="center">
                        <Grid item xs={12} sm={8} md={6}>
                          <TextField
                            label="What's your postcode?"
                            variant="outlined"
                            fullWidth
                            value={valuationValue}
                            onChange={(event) => setValuationValue(event.target.value)}
                            margin="normal"
                            InputProps={{ sx: { backgroundColor: "white", borderTopRightRadius: 0, borderBottomRightRadius: 0 } }}
                            style={{ 
                              
                              
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} sm={4} md={3}>
                          <Button type="submit" variant="contained" color="primary" fullWidth 
                            style={{ 
                              height: '58px', 
                              marginTop:"8px" ,
                              borderTopLeftRadius: 0,
                              borderBottomLeftRadius: 0,
                              }}>
                            Book a free valuation
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>

                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
        {/* offers */}
        <BlockBar />
        <div >
          <Container>
            <Grid
              container
              paddingBottom={1}
              marginTop={0}
              marginBottom={0}
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
                {/* <img
                style={{ height: "25%", margin: "10px" }}
                alt="testing1"
                src="https://strike.co.uk/static/ebb219314ad10098c1b9ade11391feb1/5d2f5/selling.webp"
              />  */}

                <Typography variant="h4" align="center" textAlign={"left"} color={"black"} sx={{paddingRight: { md: "60px" }}}>
                  See how much you could save per year when you let your home for
                  free
                </Typography>
              </Grid>
              <Grid item container md={6} paddingLeft={0}>
                <SavingsCalculator />
              </Grid>
            </Grid>
          </Container>
      </div>
      <div >
        <Container>
          <Offers />
        </Container>
      </div>
      {/* <Grid container paddingBottom={10}>
        <AdvCarousel />
      </Grid> */}
      <OnboardingModalWrapper />
      <WhyChoose/>
    </Box>
  );
};

export default LandingPage;
