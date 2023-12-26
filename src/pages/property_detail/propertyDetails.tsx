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
  Divider,
} from "@mui/material";
import { handleFormSubmit, PropertyData, PropertyForm } from "../../services/findPropertyFilter";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";

import SavingsCalculator from "../../components/presentational/saving/saving";
import { useParams } from "react-router-dom";
import { ImageCarousel } from "../../components/common/carousel";
import { MapView } from "../../components/common/map";

const BlackBackground = styled("div")({
  backgroundColor: "#333",
  color: "#fff",
  margin: "10px",
});

const PropertyDetails: React.FC = () => {
  const { property_id } = useParams();
  const [property, setProperty] = useState<PropertyData>();
  const [loading, setLoading] = useState(false);
  const [visiting, setVisiting] = useState(true);
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [err, setError] = useState("");
  const [filterRequest, setFilterRequest] = useState<PropertyForm>();

  async function handleFilter(data: PropertyForm) {
    setVisiting(false);
    try {
      setLoading(true);
      const res: any = await handleFormSubmit(data, 1);
      setFilterRequest(data);
      setProperties(res?.data);
      if (res?.data.length !== 0) {
        setProperty(res?.data[0]);
      }
      setLoading(false);
      setError("");
      console.log("PropertiesData", res);
    } catch (error) {
      console.log("esaese", error);
      setError("err");
    }
  }
  useEffect(() => {
    let prId: string = property_id ? property_id : "";
    let pf: PropertyForm = {
      propertyId: prId,
      address: "",
      images: "",
      propertyTypes: [],
      mustHaves: [],
      furnished: "",
      studentProperties: false,
    };
    handleFilter(pf);
  }, []);

  return (
    <Box marginTop="100px">
      <Container>
        <Box marginTop={3} marginBottom={4}>
          <Box marginBottom={2}>
            <Typography fontSize={"2em"}>Property Details</Typography>
          </Box>
          <Box marginBottom={1}>
            <Divider />
          </Box>

          <Grid container>
            <Grid item md={3} sm={3}>
              <Box
                padding={2}
                height={"100%"}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  justifyItems={"center"}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      component="div"
                      display="inline"
                      fontWeight="bolder"
                    >
                      <CurrencyPoundIcon /> {property?.amount}
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
                </Box>
                <Box display={"flex"} padding={1}>
                  <Box flexGrow={1}>
                    <Typography
                      variant="body1"
                      component="div"
                      textAlign={"right"}
                    >
                      Reception: {property?.reception_number}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      textAlign={"right"}
                    >
                      Beds: {property?.bed_number}
                    </Typography>
                  </Box>
                  <Box flexGrow={1}>
                    <Typography
                      variant="body1"
                      component="div"
                      textAlign={"right"}
                    >
                      Bath Rooms: {property?.bath_number}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" component="div">
                    Address: {property?.address}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" component="div">
                    Property Type: {property?.property_type}
                  </Typography>
                </Box>
                <Box marginTop={4}>
                  <Typography variant="body1" component="div">
                    Property Details: {property?.property_details}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={9} sm={9}>
              <ImageCarousel images={property?.images.split(",")} />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Box marginBottom={2}>
          <Typography fontSize={"2em"}>Property Location</Typography>
        </Box>
        <Box marginBottom={1}>
          <Divider />
        </Box>
      </Container>

      <Container>
        <Box m={4}>
          <MapView address={property?.address} />
        </Box>
      </Container>
    </Box>
  );
};

export default PropertyDetails;
