import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  LinearProgress,
  Grid,
  styled,
  Button,
  Divider,
} from "@mui/material";
import PropertyFilter from "./propertiesFilter";
import { handleFormSubmit, PropertyData, PropertyForm } from "../../services/findPropertyFilter";
import SavingsCalculator from "../../components/presentational/saving/saving";
import PropertyCard from "./property";

const BlackBackground = styled("div")({
  backgroundColor: "#333",
  color: "#fff",
  margin: "10px",
});

function PropertyFilterSection({ onSubmit }: any) {
  return (
    <Box marginTop={3} marginBottom={4}>
      <PropertyFilter onSubmit={onSubmit} />
    </Box>
  );
}

function LoadingSection() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingTop={4}
      paddingBottom={4}
    >
      <LinearProgress />
    </Box>
  );
}

function PropertiesHeaderSection({ filterRequest, count }: any) {
  return (
    <BlackBackground>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={1}
        paddingBottom={1}
      >
        <Typography variant="h6">
          Properties to rent in location: [{filterRequest?.address}]
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={1}
        paddingBottom={1}
      >
        <Typography variant="body1" display={"block"}>
          Total Properties Found in location: [{count}]
        </Typography>
      </Box>
    </BlackBackground>
  );
}

function VisitingSection() {
  return (
    <BlackBackground>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={4}
        paddingBottom={4}
      >
        <Typography variant="h6">
          Enter location and search for properties!
        </Typography>
      </Box>
    </BlackBackground>
  );
}

function ConnectionErrorSection() {
  return (
    <BlackBackground>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={4}
        paddingBottom={4}
      >
        <Typography variant="h6">Connection error, try again later!</Typography>
      </Box>
    </BlackBackground>
  );
}

function PropertyGridSection({ properties }: any) {
  return (
    <Grid container>
      {properties?.map((data: PropertyData) => (
        <Grid md={4} xs={12} sm={6} item padding={2} key={data.id}>
          <PropertyCard property={data} />
        </Grid>
      ))}
    </Grid>
  );
}

function SavingsCalculatorSection() {
  return <SavingsCalculator />;
}

const FindProperties: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [visiting, setVisiting] = useState(true);
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [metaData, setMetaData] = useState<any>({});
  const [err, setError] = useState("");
  const [filterRequest, setFilterRequest] = useState<PropertyForm | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMore, setShowMore] = useState(false);

  async function handleFilter(data: PropertyForm) {
    setVisiting(false);
    try {
      setLoading(true);
      const res: any = await handleFormSubmit(data, 1);
      setFilterRequest(data);
      setProperties(res?.data);
      setMetaData(res?.meta_data);
      console.log("print", metaData);
      setCurrentPage(1);
      setShowMore(res?.meta_data?.TotalPages > 1);
      setLoading(false);
      setError("");
      console.log("PropertiesData", res);
    } catch (error) {
      console.log("esaese", error);
      setError("err");
    }
  }

  async function handleShowMore() {
    try {
      setLoading(true);
      const res: any = await handleFormSubmit(filterRequest, currentPage + 1);
      setProperties((prevProperties) => [...prevProperties, ...res?.data]);
      setCurrentPage((prevPage) => prevPage + 1);
      setShowMore(res?.meta_data?.TotalPages > currentPage + 1);
      setLoading(false);
      setError("");
      console.log("PropertiesData", res);
    } catch (error) {
      console.log("esaese", error);
      setError("err");
    }
  }

  let headerSection = null;

  if (loading) {
    headerSection = <LoadingSection />;
  } else if (properties?.length > 0) {
    headerSection = (
      <PropertiesHeaderSection
        count={metaData?.TotalCount}
        filterRequest={filterRequest}
      />
    );
  } else if (visiting) {
    headerSection = <VisitingSection />;
  } else if (err) {
    headerSection = <ConnectionErrorSection />;
  } else {
    headerSection = <PropertiesHeaderSection filterRequest={filterRequest} />;
  }

  return (
    <Box marginTop="100px">
      <Container>
        <PropertyFilterSection onSubmit={handleFilter} />
      </Container>

      <Divider />

      <Container>
        {headerSection}
        <PropertyGridSection properties={properties} />
        {showMore && (
          <Box display="flex" justifyContent="center" marginTop={4}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={handleShowMore}
            >
              Show More
            </Button>
          </Box>
        )}
      </Container>

      <Divider />

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
            <Typography variant="h4" align="center" textAlign={"left"}>
              See how much you could save per year when you let your home for
              free
            </Typography>
          </Grid>
          <Grid item container md={6} paddingLeft={4}>
            <SavingsCalculatorSection />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FindProperties;
