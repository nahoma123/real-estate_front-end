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
import {
  PhotoLibrary as GalleryIcon,
  Map as MapIcon,
  Streetview as StreetviewIcon,
  Assignment as PlansIcon,
} from '@mui/icons-material';
import {
  Home as HouseIcon,
  Straighten as RulerIcon,
  Hotel as BedIcon,
  Bathtub as BathroomIcon,
  Chair as SofaIcon,
} from '@mui/icons-material';
import SavingsCalculator from "../../components/presentational/saving/saving";
import { useParams } from "react-router-dom";
import { ImageCarousel } from "../../components/common/carousel";
import { MapView } from "../../components/common/map";
import { List, ListItem, ListItemText, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles } from '@mui/material';
import dayjs from 'dayjs';




const BlackBackground = styled("div")({
  backgroundColor: "#333",
  color: "#fff",
  margin: "10px",
});
const typographyStyle = {
  color: 'white',
};
const iconStyle = {
  color: '#948c1e',
  marginRight: 8,
};


const StyledTableContainer = styled(TableContainer)({
  marginTop: '16px',
});

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(odd)': {
    backgroundColor: '#f3f3f3',
  },
});


const PropertyDetails: React.FC = () => {
  const { property_id } = useParams();
  const [property, setProperty] = useState<PropertyData>();
  const [loading, setLoading] = useState(false);
  const [visiting, setVisiting] = useState(true);
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [err, setError] = useState("");
  const [filterRequest, setFilterRequest] = useState<PropertyForm>();
  const formatDate = (date:any) => dayjs(date).format('DD-MM-YYYY');


  const topImageUrl = 'https://images.unsplash.com/photo-1592506119503-c0b18879bd5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  const divStyleMain = {
    backgroundImage: `url('${topImageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };
  async function handleFilter(data: PropertyForm) {
    setVisiting(false);
    try {
      setLoading(true);
      const res: any = await handleFormSubmit(data, 1);
      setFilterRequest(data);
      setProperties(res?.data);
      if (res?.data.length !== 0) {
        setProperty(res?.data[0]);
        console.log(res?.data[0]);
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
    <div className="mt-64 md:mt-20">
      <Box>
        <div style={divStyleMain} className="w-full h-96 flex flex-col justify-end items-start">
          <div className="m-4 flex md:flex-row flex-col">
            <Button
              variant="contained"
              startIcon={<GalleryIcon />}
              style={{ marginRight: 8, marginBottom:8 }}
            >
              Gallery
            </Button>

            <Button
              variant="contained"
              startIcon={<MapIcon />}
              style={{ marginRight: 8, marginBottom:8 }}
            >
              Map
            </Button>

            <Button
              variant="contained"
              startIcon={<StreetviewIcon />}
              style={{ marginRight: 8, marginBottom:8 }}
            >
              Streetview
            </Button>

            <Button variant="contained" startIcon={<PlansIcon />} style={{ marginRight: 8, marginBottom:8 }}>
              Plans
            </Button>
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full flex-col md:flex-row">
            <div className="flex flex-col w-full bg-gray-200">
              <div className="flex md:flex-row flex-col  justify-between p-8 items-between">
                <StyledTableContainer>
                  <Table>
                    <TableHead>
                    </TableHead>
                    <TableBody>
                      <StyledTableRow>
                        <TableCell>Address</TableCell>
                        <TableCell>{`${property?.street_address}, ${property?.postal_code}, ${property?.location}`}</TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell>Bedrooms</TableCell>
                        <TableCell>{property?.bed_number}</TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell>Bathrooms</TableCell>
                        <TableCell>{property?.bath_number}</TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell>Price</TableCell>
                        <TableCell>{property?.amount}</TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>{property?.property_type}</TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell>Features</TableCell>
                        <TableCell>{property?.features}</TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell>Furnished</TableCell>
                        <TableCell>{property?.furnished}</TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>{property?.property_details}</TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell>Next Inspection Date</TableCell>
                        <TableCell>{formatDate(property?.next_inspection_date)}</TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell>EPC</TableCell>
                        <TableCell>{property?.epc}</TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell>Student Property</TableCell>
                        <TableCell>{property?.is_student_property ? 'Yes' : 'No'}</TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell>Status</TableCell>
                        <TableCell>{property?.status}</TableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </StyledTableContainer>
              </div>
              <div className="w-2/3 m-2">
                <Divider />
              </div>
              <div className="flex justify-between flex-wrap">
                <div className="w-1/3 ml-4 flex flex-col md:flex-row">
                  <Typography variant="button" marginLeft={2} style={typographyStyle}>
                  <HouseIcon style={iconStyle} />
                    {property?.property_type}
                  </Typography>

                  <Typography variant="button" marginLeft={2} style={typographyStyle}>
                    <RulerIcon style={iconStyle} />
                    Ruler
                  </Typography>
                </div>
                <div className="m-4 flex flex-col md:flex-row">
                  <Typography variant="button" marginLeft={2} style={typographyStyle}>
                    <BedIcon style={iconStyle} />
                    {property?.bed_number}
                  </Typography>

                  <Typography variant="button" marginLeft={2} style={typographyStyle}>
                    <BathroomIcon style={iconStyle} />
                    {property?.bath_number}
                  </Typography>

                  <Typography variant="button" marginRight={2} marginLeft={2} style={typographyStyle}>
                    <SofaIcon style={iconStyle} />
                    Sofa
                  </Typography>
                </div>
              </div>
            </div>
            <div className="h-96 w-full md:w-1/3 bg-white">
              <div className="flex flex-col m-4">
                <div className="flex" >
                  <Typography variant="button" sx={{ fontSize: { xs: '1rem', sm: '1rem', md: '1.3rem', lg: '1.3rem' }}}>
                    Contact an agent
                  </Typography>
                </div>
                <div className="flex flex-row mt-4">
                  <div className="w-36 h-36 bg-green-400 border-2 shadow-md">
                    <img alt="profile" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  </div>
                  <div className="flex flex-col ml-4">
                    <Typography variant="button" fontSize={12}>
                      Ellie Day
                    </Typography>
                    <Typography variant="button" fontSize={12}>
                      Mayfair & St James's
                    </Typography>
                    <Typography variant="button" fontSize={12}>
                      +44(0)2075785100
                    </Typography>
                    <Typography variant="button" fontSize={12}>
                      Contact Now
                    </Typography>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="contained" sx={{width:"100%"}}>
                    Request details
                  </Button>
                </div>
                <div className="my-4">
                  <Button variant="contained" style={{ marginTop:"44px", width:"100%", backgroundColor:"white", color:"black" }}>
                    Download PDF Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Container>
        {/* <Box marginTop={3} marginBottom={4}>
          <Box marginBottom={2}>
            <Typography fontSize={"2em"}>Property Details</Typography>
          </Box>
          <Box marginBottom={1}>
            <Divider style={{backgroundColor: '#948c1e'}} />
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
        </Box> */}
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
    </div>
  );
};

export default PropertyDetails;
