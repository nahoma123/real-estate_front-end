import React from "react";
import {
  Paper,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

interface ListingProps {
  // Add any additional props if needed
}

const Listing: React.FC<ListingProps> = () => {
  const propertyDetails = {
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg"
    ],
    video: "https://example.com/video.mp4",
    map: "https://example.com/map",
    epcRating: "C67",
    keyFeatures: "Spacious rooms\nModern kitchen\nLarge backyard",
    price: "£500,000",
    bedrooms: 4,
    bathrooms: 2,
    livingRooms: 1
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h5" component="div" gutterBottom>
          Property Listing
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Price</TableCell>
                <TableCell>{propertyDetails.price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bedrooms</TableCell>
                <TableCell>{propertyDetails.bedrooms}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bathrooms</TableCell>
                <TableCell>{propertyDetails.bathrooms}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Living Rooms</TableCell>
                <TableCell>{propertyDetails.livingRooms}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>EPC Rating</TableCell>
                <TableCell>{propertyDetails.epcRating}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Key Features</TableCell>
                <TableCell>
                  {propertyDetails.keyFeatures.split("\n").map((feature, index) => (
                    <div key={index}>{feature}</div>
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Video</TableCell>
                <TableCell>{propertyDetails.video}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Map</TableCell>
                <TableCell>{propertyDetails.map}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default Listing;
