import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { PropertyData } from "services/findPropertyFilter";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { useNavigate } from "react-router-dom";

interface PropertyCardProps {
  property: PropertyData;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const images: string[] = property.images.split(",");
  const [mainImage, ...remainingImages] = images;
  const navigate = useNavigate()
  
  useEffect(() => {
    console.log("property", property);
  }, []);

  return (
    <Card key={property.address} sx={{ marginBottom: 3 }}>
      {mainImage && (
        <CardMedia
          component="img"
          sx={{ width: "100%" }}
          image={mainImage}
          alt={`Main Image`}
          onError={(e) => {
            e.currentTarget.src = ""; // Set an empty source for broken image links
          }}
        />
      )}
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {remainingImages.map((image, index) => (
          <Card
            key={index}
            sx={{
              width: "20%",
              padding: "5px",
              marginBottom: 1,
              borderRadius: "0px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "100%", objectFit: "cover" }}
              image={image}
              alt={`Image ${index + 2}`}
              onError={(e) => {
                e.currentTarget.src = ""; // Set an empty source for broken image links
              }}
            />
          </Card>
        ))}
      </Box>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography
              variant="h5"
              component="div"
              display="inline"
              fontWeight="bolder"
            >
              <CurrencyPoundIcon /> {property.amount}
            </Typography>
            <Typography
              display="inline"
              paddingLeft={1}
              variant="h6"
              fontWeight="bolder"
            >
              pcm
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" component="div" textAlign={"right"}>
              Reception: {property.reception_number}
            </Typography>
            <Typography variant="body1" component="div" textAlign={"right"}>
              Beds: {property.bed_number}
            </Typography>
            <Typography variant="body1" component="div" textAlign={"right"}>
              Bath Rooms: {property.bath_number}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" component="div">
            Address: {property.address}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" component="div">
            Property Type: {property.property_type}
          </Typography>
        </Box>
        <Box marginTop={2}>
          <Button fullWidth variant="outlined" onClick={()=> navigate(`/property_details/${property.property_id}`)}>View More</Button>
        </Box>
        {/* Include additional property details here */}
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
