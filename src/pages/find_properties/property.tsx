import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { PropertyData } from "../../services/findPropertyFilter";
import { useNavigate } from "react-router-dom";

interface PropertyCardProps {
  property: PropertyData;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const images: string[] = property.images.split(",");
  const [mainImage, ...remainingImages] = images;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("property", property);
  }, []);

  return (
    <Card key={property.address} className="mb-3">
      {mainImage && (
        <CardMedia
          component="img"
          className="w-full"
          image={mainImage}
          alt={`Main Image`}
          onError={(e) => {
            e.currentTarget.src = ""; // Set an empty source for broken image links
          }}
        />
      )}
      <Box className="flex flex-wrap justify-center">
        {remainingImages.map((image, index) => (
          <Card key={index} className="w-1/5 p-1 mb-1 border-0">
            <CardMedia
              component="img"
              className="w-full object-cover"
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
        <Box className="flex justify-between items-center">
          <Box>
            <Typography
              variant="h5"
              component="div"
              display="inline"
              fontWeight="bolder"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.75rem", md: "1rem", lg: "1rem" } }}
            >
              <CurrencyPoundIcon fontSize="small" />
            </Typography>
            <Typography
              display="inline"
              paddingLeft={1}
              variant="h6"
              fontWeight="bolder"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.75rem", md: "1rem", lg: "1rem" } }}
            >
              {property.amount + " " }
              pcm
            </Typography>
          </Box>
          <Box className="text-right">
            <Typography variant="body1" component="div" sx={{ fontSize: { xs: "0.75rem", sm: "0.75rem", md: "1rem", lg: "1rem" } }}>
              Reception: {property.reception_number}
            </Typography>
            <Typography variant="body1" component="div" sx={{ fontSize: { xs: "0.75rem", sm: "0.75rem", md: "1rem", lg: "1rem" } }}>
              Beds: {property.bed_number}
            </Typography>
            <Typography variant="body1" component="div" sx={{ fontSize: { xs: "0.75rem", sm: "0.75rem", md: "1rem", lg: "1rem" } }}>
              Bath Rooms: {property.bath_number}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.75rem", md: "1rem", lg: "1rem" } }}
          >
            Address: {property.address}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            component="div"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.75rem", md: "1rem", lg: "1rem" } }}
          >
            Property Type: {property.property_type}
          </Typography>
        </Box>
        <Box marginTop={2}>
        <Button
          fullWidth
          variant="outlined"
          sx={{
            fontSize: { sx: '12px', sm: '12px', md: '15px', lg: '15px' },
          }}
          onClick={() => navigate(`/property_details/${property.property_id}`)}
        >
          View More
        </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
