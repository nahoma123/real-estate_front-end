import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Container, Typography, Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const CarouselItem = styled(Paper)({
  position: "relative",
  textAlign: "center", // Add this line
  "&:hover img": {
    filter: "blur(1px)",
  },
});

const CarouselImage = styled("img")({
  transition: "filter 0.5s ease-in-out",
  height: "450px", // set a fixed height
  width: "100%", // set a fixed width
});

const CarouselOverlay = styled(Grid)({
  height: "100%",
  width: "25%",
  position: "absolute",
  justifyContent: "center", // added this
  left: "7%", // changed from right to left
  top: "0%",
  textAlign: "center",
  zIndex: 2,
  padding: "1rem",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const AdvCarousel: React.FC = () => {
  const carouselItems = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "We provide Free valuation",
      description: "The valuation is covered by us",
      buttonLabel: "Book Free Valuation",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1896&q=80",
      title: "We provide Free Onboarding",
      description: "And we will alway do",
      buttonLabel: "Check our Services",
    },

    // Add more slides as needed
  ];

  return (
    <Container maxWidth="lg">
      <Carousel>
        {carouselItems.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Carousel>
    </Container>
  );
};

const CarouselButton: React.FC<{ label: any }> = ({ label }) => {
  return (
    <Button className="CheckButton" variant="contained" color="primary">
      {label}
    </Button>
  );
};

const Item: React.FC<{ item: any }> = ({ item }) => {
  return (
    <CarouselItem>
      <CarouselImage src={item.image} alt={item.title} />
      <CarouselOverlay item container direction={"column"}>
        <Grid>
          <Typography variant="h5" gutterBottom color="white">
            {item.title}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body1" color="white">
            {item.description}
          </Typography>
        </Grid>
        <Grid container item padding={"5px"} justifyContent="center">
          <CarouselButton label={item.buttonLabel} />
        </Grid>
      </CarouselOverlay>
    </CarouselItem>
  );
};

export default AdvCarousel;
