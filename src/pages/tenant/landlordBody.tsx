import {
  House,
  HouseOutlined,
  HouseRounded,
  HouseSiding,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Snackbar,
  Typography,
  lighten,
  useTheme,
} from "@mui/material";
import { VALUATIONS } from "../../constants/api";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookingValuationData } from "../../services/datamodels";
import { FilterType, getRequest } from "../../utils/getRequest";
import CancelBookingDialogDemo from "./cancelbooking";
import RearrangeBookingDialogDemo from "./rearrage";

interface UserProperty {
  status?: string;
  address: string;
  emailAddress?: string;
}

interface Rental {
  id: number;
  property_id: string;
  status: string;
  tenant_id: string;
  amount: number;
  address: string;
  postal_code: string;
  property_type: string;
  images: string[];
  reception_number: number;
  bed_number: number;
  bath_number: number;
  property_details: string;
  epc: string;
  features: string[];
  furnished: string;
  next_inspection_date: string;
  created_at: string;
  updated_at: string;
}

interface RentalList {
  rentals: Rental[];
}

const CustomListItem: React.FC<UserProperty> = ({ address, status }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HouseRounded color={"disabled"} fontSize="large" />
      </Grid>
      <Grid item xs={10}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography fontSize={"1em"} fontWeight={"bolder"}>
            {address}
          </Typography>
          <Typography fontSize={"0.9em"} fontWeight={"bold"}>
            {status}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

interface ValuationListItemProps {
  address: string;
  time?: string;
  id: string;
  refreshPage(): void;
  handleSuccess(message: string): void;
  handleError(err: string): void;
}

const ValuationListItem: React.FC<ValuationListItemProps> = ({
  id,
  address,
  refreshPage,
  time,
  handleError,
  handleSuccess,
}) => {
  let timeD = new Date(time || "");
  return (
    <Grid container paddingTop="10px" paddingBottom="10px">
      <Grid item xs={12} padding={2} paddingTop={1}>
        <Typography fontWeight={"bolder"} variant="body1">
          Valuation Visit
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography variant="body1" fontWeight={"bolder"}>
            {address}
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"center"}
            width={"100%"}
            margin={2}
          >
            <Typography
              variant="h6"
              align="left"
              textAlign={"center"}
              fontWeight="1000"
              style={{
                display: "inline",
                padding: "5px",
                // backgroundColor: primaryColor,
                color: "black",
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0) calc(100% - 5px), #948c1e calc(100% - 5px), #948c1e 100%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              {`${timeD.toDateString()} at ${timeD.toLocaleTimeString("en-GB", {
                hour12: false,
              })}`}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CancelBookingDialogDemo
          refreshPage={refreshPage}
          id={id}
          handleSuccess={handleSuccess}
          handleError={handleError}
        />
        <RearrangeBookingDialogDemo
          currentPreferredTime={time}
          refreshPage={refreshPage}
          id={id}
          handleSuccess={handleSuccess}
          handleError={handleError}
        />
      </Box>
    </Grid>
  );
};

const LandLordBody: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [userProperties, setUserProperties] = useState<UserProperty[]>();
  const [ userRentals, setUserRentals ] = useState<RentalList[]>();
  const [activeValuations, setActiveValuations] =
    useState<BookingValuationData[]>();

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user != null) {
      let userObject = JSON.parse(user);
      console.log(userObject.rentals)
      setUserRentals(userObject);
    }
    setUserProperties([
      {
        address: "Address 12, LimbCity",
        status: "Off Market",
        emailAddress: "nahomasnake12@gmail.com",
      },
    ]);
  }, []);

  const [loading, setLoading] = useState<boolean>(false);

  async function handleFilter() {
    try {
      setLoading(true);
      const currentDate = new Date();
      const currentDateTimeUTC = currentDate.toISOString();

      const filters: FilterType[] = [
        {
          field: "preferred_time",
          operator: "gte",
          value: currentDateTimeUTC,
        },
        {
          field: "status",
          operator: "=",
          value: "ACTIVE",
        },
      ];
      const res: any = await getRequest(VALUATIONS, 1, 10, filters);
      setLoading(false);
      setActiveValuations(res?.data);
      console.log("PropertiesData", res);
    } catch (error) {}
  }

  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // State variable for error message

  const [isSnackBarOpen, setSnackBarOpen] = useState(false);
  const [error, setError] = useState<string | null>(null); // State variable for error message

  function handleError(errorMessage: string) {
    setError(errorMessage);
    setSnackBarOpen(true);
  }
  function handleSuccess(message: string) {
    setSuccessMessage(message);
    setIsSuccess(true);
  }

  useEffect(() => {
    handleFilter();
  }, [isSuccess]);

  return (
    <Paper
      sx={{
        marginBottom: "50px",
        marginTop: "50px",
        padding: "16px",
        width: "100%",
      }}
    >
      {userProperties?.map(function (item, i) {
        return (
          <div style={{minHeight:"500px"}}>
            <CustomListItem address={item.address} status={item.status} />
            <Divider
              sx={{
                marginLeft: "5%",
                marginRight: "5%",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Box>
              {activeValuations && activeValuations?.length > 0 ? (
                <Typography
                  fontSize={30}
                  sx={{ margin: "2%", marginTop: "50px", fontWeight: "bold" }}
                >
                  Up Next
                </Typography>
              ) : (
                <></>
              )}

              <Paper
                sx={{
                  margin: "5%",
                  marginBottom: "0",
                  backgroundColor: lighten(
                    theme.palette.action.disabledBackground,
                    0.95
                  ),
                }}
              >
                {activeValuations?.map((val) => {
                  return (
                    <>
                      <ValuationListItem
                        refreshPage={handleFilter}
                        id={val.real_estate_id || ""}
                        address={val.address}
                        time={val.preferred_time}
                        handleSuccess={handleSuccess}
                        handleError={handleError}
                      />
                    </>
                  );
                })}
              </Paper>
            </Box>
            <Box
              display={"flex"}
              alignContent={"center"}
              justifyContent={"center"}
            >
              <Button
                variant="outlined"
                fullWidth
                sx={{ margin: "20px" }}
                onClick={() => navigate("/book_valuation")}
              >
                Book Valuation
              </Button>
            </Box>
            <Snackbar
              open={isSuccess}
              autoHideDuration={6000}
              onClose={() => setIsSuccess(false)}
              message="Valuation updated"
            >
              <Alert severity="success">Valuation updated!</Alert>
            </Snackbar>
            <Snackbar
              open={isSnackBarOpen}
              autoHideDuration={6000}
              onClose={() => setSnackBarOpen(false)}
              message={error}
            >
              <Alert severity="error">{error}</Alert>
            </Snackbar>
          </div>
        );
      })}
    </Paper>
  );
};

export { LandLordBody };
