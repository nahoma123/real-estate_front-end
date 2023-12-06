import React, { useState } from "react";
import {
  Slider,
  Typography,
  Paper,
  Box,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import { primaryColor } from "styles/color";
import Wallet from "../../../assets/images/wallet.png";
import ImgComponent from "../image/img_component";

const SavingsCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(3500);
  const [commissionRate, setCommissionRate] = useState(0.1);
  const tenancyFeeMultiplier = 4;

  const calculateSavings = () => {
    // - [Calculation Update] the saving amount should be the rental income TIMES 12 MINUS the commission amount they have chosen and MINUS 4x the rental income chosen by them
    const rentalIncome = propertyValue;
    const commissionAmount = rentalIncome * commissionRate;
    const tenancyFeeAmount = rentalIncome * tenancyFeeMultiplier;
    const savings = rentalIncome * 12 - commissionAmount - tenancyFeeAmount;
    return savings.toFixed(2);
  };

  const handleSliderChange = (event: any, newValue: any) => {
    setPropertyValue(newValue);
  };

  const handleCommissionChange = (event: any) => {
    setCommissionRate(event.target.value as number);
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
      {/* <Typography variant="h5" gutterBottom>
        See how much you could save per year when you let your home for free
      </Typography> */}
      <Box marginTop={5}>
        <Typography variant="h6" display={"inline"}>
          Savings based on a high street commission of
        </Typography>
        <Typography
          display={"inline"}
          marginLeft={1}
          marginRight={1}
          fontWeight="bold"
          variant="h6"
        >
          (10%,11%,12%,13%,14%,15%)
        </Typography>
        <Typography variant="h6" display={"inline"}>
          and initial tenancy fees of 4 weeks rent :
        </Typography>
      </Box>
      <Box marginTop={2}>
        <Divider />
      </Box>
      <Box marginTop={2}>
        <Typography variant="h6" gutterBottom>
          Slide to set your predicted monthly rental income (Beginning at 300
          and ending at 10000):
        </Typography>

        <Grid container>
          <Grid item md={12}>
            <Slider
              sx={{ paddingTop: "30px" }}
              value={propertyValue}
              min={300}
              max={10000}
              step={100}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              aria-label="Property Value"
            />
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={2}>
        <Grid container alignItems="center">
          <Grid item md={9} sm={9}>
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight="bold"
              color={primaryColor}
            >
              £{calculateSavings()}
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} style={{ maxWidth: "100%", height: "auto" }}>
            <ImgComponent imageUrl={Wallet} alt="wallet img" />
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={2}>
        <FormControl fullWidth>
          <Box marginTop={2}>
            <Typography variant="h6" gutterBottom>
              Commission Rate: {commissionRate * 100}%
            </Typography>
          </Box>
          <Select
            value={commissionRate}
            onChange={handleCommissionChange}
            variant="outlined"
            aria-label="Commission Rate"
          >
            <MenuItem value={0.1}>10%</MenuItem>
            <MenuItem value={0.11}>11%</MenuItem>
            <MenuItem value={0.12}>12%</MenuItem>
            <MenuItem value={0.13}>13%</MenuItem>
            <MenuItem value={0.14}>14%</MenuItem>
            <MenuItem value={0.15}>15%</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default SavingsCalculator;
