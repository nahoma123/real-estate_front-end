import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    House,
    HouseOutlined,
    HouseRounded,
    HouseSiding,
  } from "@mui/icons-material";
  import {
    Button,
    Divider,
    Typography,
    Box,
    Grid,
    Select,
    MenuItem,
  } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Define interfaces outside of the component
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

const CustomListItem = ({ address, status }: any) => {
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

const DashboardSecond = () => {
  const navigate = useNavigate();
  const [userRentals, setUserRentals] = useState<RentalList>();
  const [selectedUserRental, setSelectedUserRental] = useState<Rental | undefined>();

  useEffect(() => {
    // Fetch user data from localStorage
    let user = localStorage.getItem("user");
    if (user != null) {
      let userObject = JSON.parse(user);
      setUserRentals(userObject);
      if(userObject.rentals.length >0){
        setSelectedUserRental(userObject.rentals[0])
      }
    }
  }, []);

  return (
    <div className="my-8 border-2 rounded-lg shadow pt-8" style={{ minHeight: "500px" }}>
        <div className='flex flex-row'>
            <CustomListItem address={selectedUserRental?.address} status={selectedUserRental?.status} />
            <div className='mx-8'>
                <Select
                    label="Select Rental"
                    value={selectedUserRental?.property_id || ""}
                    onChange={(e) => {
                    const selectedRental = userRentals?.rentals.find(rental => rental.property_id === e.target.value);
                    setSelectedUserRental(selectedRental);
                    }}
                >
                    {userRentals?.rentals.map(rental => (
                    <MenuItem key={rental.property_id} value={rental.property_id}>{rental.address}</MenuItem>
                    ))}
                </Select>
            </div>
        </div>

      <Divider
        sx={{
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <div className='mx-8 s'>
      {selectedUserRental && (
                <TableContainer>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Property</TableCell>
                        <TableCell>Value</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>Amount</TableCell>
                        <TableCell>{selectedUserRental.amount}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Postal Code</TableCell>
                        <TableCell>{selectedUserRental.postal_code}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Property Type</TableCell>
                        <TableCell>{selectedUserRental.property_type}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Bedrooms</TableCell>
                        <TableCell>{selectedUserRental.bed_number}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Bathrooms</TableCell>
                        <TableCell>{selectedUserRental.bath_number}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Property Details</TableCell>
                        <TableCell>{selectedUserRental.property_details}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>EPC</TableCell>
                        <TableCell>{selectedUserRental.epc}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Features</TableCell>
                        <TableCell>
                            {selectedUserRental.features.map((feature, index) => (
                            <div key={index}>{feature}</div>
                            ))}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Next Inspection Date</TableCell>
                        <TableCell>
                            {selectedUserRental.next_inspection_date &&
                            new Date(selectedUserRental.next_inspection_date).toLocaleDateString('en-GB')}
                        </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            )}
      </div>
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
    </div>
  );
};

export default DashboardSecond;
