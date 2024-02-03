import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Grid,
  TextField,
  Box,
  Typography,
  Button,
  Autocomplete,
} from "@mui/material";
import { useSnackbar } from "notistack";

type BookValuationProps = {};

type Address = {
  address: string;
  postcode: string;
};

const jsonAddresses: Address[] = [
  {
    address: "123 Main Street, CityA, CountryA",
    postcode: "10001",
  },
  {
    address: "456 Oak Avenue, CityB, CountryB",
    postcode: "20002",
  },
  {
    address: "789 Pine Lane, CityC, CountryC",
    postcode: "30003",
  },
  {
    address: "101 Elm Road, CityD, CountryD",
    postcode: "40004",
  },
  {
    address: "202 Maple Drive, CityE, CountryE",
    postcode: "50005",
  },
];

function BookValuation({}: BookValuationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState<string>("");
  const [addressesForPostcode, setAddressesForPostcode] = useState<string[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const postcodeValue = searchParams.get("value") || "";
    setPostcode(postcodeValue);
  }, [location.search]);

  const handlePostcodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    setPostcode(newInputValue);

    // Filter addresses based on the entered postcode
    const addressesForPostcode = jsonAddresses
      .filter((address) => address.postcode === newInputValue)
      .map((address) => address.address);

    // Update the addresses based on the entered postcode
    setAddressesForPostcode(addressesForPostcode);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleAddressClick = () => {
    if (!postcode || !address) {
      enqueueSnackbar("Fill both postcode and address to proceed", {
        variant: "error",
      });
      return;
    }

    const selectedAddress = jsonAddresses.find(
      (jsonAddress) =>
        jsonAddress.address.includes(address) && jsonAddress.postcode === postcode
    );

    if (selectedAddress) {
      sessionStorage.setItem("address", selectedAddress.address);
      navigate(`/book_valuation_registration?value=${postcode}`);
    } else {
      // Handle the case when the entered postcode is not in the JSON data
      enqueueSnackbar("Postcode not found in the provided list. Proceeding with entered data.", {
        variant: "warning",
      });

      // You can choose to proceed with the entered data or handle it as needed.
      sessionStorage.setItem("address", address);
      navigate(`/book_valuation_registration?value=${postcode}`);
    }
  };

  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid md={3} xs={0}></Grid>
        <Grid item sm={6}>
          <Box paddingTop={5} paddingBottom={2} margin={3}>
            <Grid justifyContent={"left"}>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h3"
                align="left"
                gutterBottom
              >
                Let's value your home
              </Typography>
              <Typography
                variant="h5"
                align="left"
                style={{ display: "inline" }}
              >
                Book a no-obligation home valuation with our Strike agent:
              </Typography>
            </Grid>
          </Box>

          <Box margin={3}>
            {/* Use Autocomplete for postcode autocompletion */}
            <Autocomplete
              options={jsonAddresses.map((option) => option.postcode)}
              freeSolo
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Enter postcode"
                  value={postcode}
                  onChange={handlePostcodeChange}
                  variant="outlined"
                  fullWidth
                />
              )}
              inputValue={postcode}
              onInputChange={(event, newInputValue) => {
                setPostcode(newInputValue);
                // Filter addresses based on the entered postcode
                const addressesForPostcode = jsonAddresses
                  .filter((address) => address.postcode === newInputValue)
                  .map((address) => address.address);
                // Update the addresses based on the entered postcode
                setAddressesForPostcode(addressesForPostcode);
              }}
              selectOnFocus
              clearOnBlur
              getOptionLabel={(option) => option}
              onChange={(event, newValue:any) => {
                setPostcode(newValue);
                // Filter addresses based on the selected postcode
                const addressesForPostcode = jsonAddresses
                  .filter((address) => address.postcode === newValue)
                  .map((address) => address.address);
                // Update the addresses based on the selected postcode
                setAddressesForPostcode(addressesForPostcode);
              }}
            />
          </Box>
          <Box margin={3}>
            {/* Use Autocomplete for addresses */}
            <Autocomplete
              options={addressesForPostcode}
              freeSolo
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Enter full Address"
                  value={address}
                  onChange={handleAddressChange}
                  variant="outlined"
                  fullWidth
                />
              )}
              inputValue={address}
              onInputChange={(event, newInputValue) => {
                setAddress(newInputValue);
              }}
              selectOnFocus
              clearOnBlur
            />
          </Box>

          <Grid item xs={12}>
            <Box margin={3}>
              <Button
                style={{ borderRadius: "0px", width: "100%" }}
                variant="contained"
                onClick={() => handleAddressClick()}
              >
                Next
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid md={3} xs={0}></Grid>
      </Grid>
    </Box>
  );
}

export { BookValuation };
