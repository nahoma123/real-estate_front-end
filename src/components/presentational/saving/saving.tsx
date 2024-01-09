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
import { primaryColor } from "../../../styles/color";
import Wallet from "../../../assets/images/wallet.png";
import ImgComponent from "../image/img_component";

const SavingsCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(3500);
  const [commissionRate, setCommissionRate] = useState(0.1);
  const tenancyFeeMultiplier = 4;

  const calculateSavings = () => {
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
    <Paper elevation={3} className="p-4 min-w-full text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
      <Box className="mt-5">
        <Typography variant="h6" display={"inline"}>
          Savings based on a high street commission of
        </Typography>
        <Typography
          display={"inline"}
          className="font-bold"
        >
          (10%, 11%, 12%, 13%, 14%, 15%)
        </Typography>
        <Typography variant="h6" display={"inline"}>
          and initial tenancy fees of 4 weeks rent:
        </Typography>
      </Box>
      <Box className="mt-2">
        <Divider />
      </Box>
      <Box className="mt-2">
        <Typography variant="h6" gutterBottom>
          Slide to set your predicted monthly rental income (Beginning at 300
          and ending at 10000):
        </Typography>
        <Grid container justifyContent="center">
          <Grid item md={12} sm={12}>
            <Slider
              className="pt-8"
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
      <Box className="mt-2">
        <Grid container display="flex" flexDirection="row" alignItems="center" justifyContent="center">
          <Grid item xs={9} sm={9} md={9}>
            <Typography
              sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3.5rem', lg: '3.5rem' } }}
              className={`font-bold`}
              color={`${primaryColor}`}
              style={{}}
            >
              £{calculateSavings()}
            </Typography>
          </Grid>
          <Grid
            item
            xs={0}
            sm={3}
            md={3}
            style={{ height: "auto" }}
          >
            <ImgComponent imageUrl={Wallet} alt="wallet img" />
          </Grid>
        </Grid>
      </Box>
      <Box className="mt-2">
        <FormControl fullWidth>
          <Box className="mt-2">
            <Typography variant="h6" gutterBottom>
              Commission Rate: {commissionRate * 100}%
            </Typography>
          </Box>
          <Select
            value={commissionRate}
            onChange={handleCommissionChange}
            variant="outlined"
            aria-label="Commission Rate"
            className="w-full"
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
