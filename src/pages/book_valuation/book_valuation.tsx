import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Grid,
  TextField,
  MenuItem,
  Box,
  Typography,
  Modal,
  useMediaQuery,
  Button,
} from "@mui/material";
import axios from "axios";
import { Search } from "@mui/icons-material";
import { GetAddressUrl } from "constants/api";
import { ObjectType } from "typescript";

type BookValuationProps = {};

type Address = {
  address: string;
};

function BookValuation({}: BookValuationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [postcode, setPostcode] = useState("");
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const postcodeValue = searchParams.get("value") || "";
    setPostcode(postcodeValue);
  }, [location.search]);

  const handlePostcodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(event.target.value);
  };

  const handleFindAddress = async () => {
    try {
      const response = await axios.get(GetAddressUrl(postcode));
      const result = response?.data?.suggestions;
      console.log("Result-", result);
      if (result && result.length > 0) {
        setAddresses(result); // Update addresses with the list of address objects
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
        setAddresses([]); // Clear the addresses if there are no results
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
      setIsModalOpen(false);
    }
  };

  const handleAddressClick = (address: string) => {
    setSelectedAddress(address);
    setIsModalOpen(false);
    sessionStorage.setItem('address', address)
    navigate(`/book_valuation_registration?value=${postcode}`);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedAddress("");
    setAddresses([]);
  };

  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

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
            <TextField
              label="Enter postcode"
              value={postcode}
              onChange={handlePostcodeChange}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Grid item xs={12}>
            <Box margin={3}>
              <Button
                style={{ borderRadius: "0px", width: "100%" }}
                variant="contained"
                startIcon={<Search />}
                onClick={handleFindAddress}
              >
                Find Address
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid md={3} xs={0}></Grid>
      </Grid>

      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: isMobile ? "90%" : "60%",
            maxWidth: 600,
          }}
        >
          <Typography variant="h6" id="modal-title" gutterBottom>
            Select Address
          </Typography>
          <TextField
            label="Select address"
            select
            variant="outlined"
            fullWidth
            value={selectedAddress}
            onChange={(event) => setSelectedAddress(event.target.value)}
          >
            {addresses.map((address, index) => {
              console.log("Address", address);
              return (
                <MenuItem
                  key={index}
                  value={address?.address}
                  onClick={() => handleAddressClick(address?.address)}
                >
                  {address?.address}
                </MenuItem>
              );
            })}
          </TextField>
        </Box>
      </Modal>
    </Box>
  );
}

export { BookValuation };
