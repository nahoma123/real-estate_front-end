import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Login } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

type BookValuationRegistrationConfirmationProps = {};

type ListItemProps = {
  text: string;
};

const ListItem: React.FC<ListItemProps> = ({ text }) => {
  return (
    <Box m={3}>
      <CheckIcon
        display={"inline"}
        sx={{
          marginRight: "10px",
        }}
      />
      <Typography variant="h6" display={"inline"}>
        {text}
      </Typography>
    </Box>
  );
};

const BookValuationRegistrationConfirmation: React.FC<
  BookValuationRegistrationConfirmationProps
> = () => {
  const [selectedDatetime, setSelectedDatetime] = useState("");
  const [address, setAddress] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let address = sessionStorage.getItem("address");
    let selectedDateTime = sessionStorage.getItem("selected_datetime");
    setAddress(address === null ? "" : address);
    setSelectedDatetime(selectedDateTime === null ? "" : selectedDateTime);

    const selectedDatetime: Date = new Date();

    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
    };

    const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(
      "en-US",
      options
    );
    const formattedDate: string = formatter.format(selectedDatetime);

    setFormattedDate(formattedDate);

    if (address == null) {
      setAddress("");
    } else {
      setAddress(address);
    }
  }, []);
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item sm={8}>
          <Box paddingTop={5} paddingBottom={2} margin={3}>
            <Grid justifyContent={"center"}>
              <Typography
                sx={{ fontWeight: "bolder", color: "black" }}
                variant="h6"
                align="left"
                gutterBottom
              >
                You're booked In!
              </Typography>
              <Typography
                align="left"
                fontWeight={"bold"}
                style={{ display: "inline" }}
              >
                We will value {address} on
              </Typography>

              <Typography
                variant="h4"
                align="center"
                fontWeight="1000"
                marginTop={2}
                style={{
                  padding: "5px",
                  // backgroundColor: primaryColor,
                  color: "black",
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0) calc(100% - 5px), #948c1e calc(100% - 5px), #948c1e 100%, rgba(0, 0, 0, 0) 100%)",
                }}
              >
                {formattedDate} at{" "}
                {new Date(selectedDatetime).toLocaleTimeString()}
              </Typography>
            </Grid>
          </Box>
          <Box marginTop={5} margin={3}>
            <Typography variant="h5">Login to Freelets to:</Typography>
          </Box>
          <ListItem text={"Meet your Freelet agent who will value your home"} />
          <ListItem text={"Meet any changes to your valuation appointment"} />
          <Box margin={3}>
            <Button
              type="submit"
              variant="contained"
              style={{ borderRadius: "0px", marginTop: "20px" }}
              fullWidth
              onClick={() => navigate("/user_account/landlord")}
              startIcon={<Login />}
            >
              Login to Freelets
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export { BookValuationRegistrationConfirmation };
