import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { PropertyForm } from "services/findPropertyFilter";

interface PropertyFilterProps {
  onSubmit: (data: PropertyForm) => void;
}

const PropertyFilter: React.FC<PropertyFilterProps> = ({ onSubmit }) => {
  const { handleSubmit, control, formState } = useForm<PropertyForm>();

  const handleFormSubmit = (data: PropertyForm) => {
    onSubmit(data);
  };
  const propertyTypes = [
    { label: "House", value: "house" },
    { label: "Bungalow", value: "bungalow" },
    { label: "Flat", value: "flat" },
    { label: "Garage", value: "garage" },
    { label: "Room", value: "room" },
  ];

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Controller
            name="address"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field }) => (
              <TextField
                label="Address"
                value={field.value || ""}
                onChange={(e) => field.onChange(e.target.value)}
                onBlur={field.onBlur}
                error={!!formState.errors?.address} // Access field error via formState.errors
                helperText={formState.errors?.address?.message || ""}
                fullWidth
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <Controller
            name="minAmount"
            control={control}
            render={({ field }) => (
              <TextField label="Min Amount" {...field} fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <Controller
            name="maxAmount"
            control={control}
            render={({ field }) => (
              <TextField label="Max Amount" {...field} fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <Controller
            name="minBeds"
            control={control}
            render={({ field }) => (
              <TextField
                value={field.value || ""}
                label="Min Beds"
                onChange={(e) => field.onChange(e.target.value)}
                onBlur={field.onBlur}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <Controller
            name="maxBeds"
            control={control}
            render={({ field }) => (
              <TextField label="Max Beds" {...field} fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <FormControl fullWidth>
            <Controller
              control={control}
              name="propertyTypes"
              defaultValue={[]}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  id="PropertyTypes"
                  variant="outlined"
                  label="Property Types"
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected: any) =>
                      (selected as string[]).join(", "),
                  }}
                >
                  {propertyTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} md={2}>
          <FormControl fullWidth>
            <Controller
              name="mustHaves"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  id="MustHaves"
                  variant="outlined"
                  label="Must Haves"
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected: any) =>
                      (selected as string[]).join(", "),
                  }}
                >
                  <MenuItem value="parking">Parking</MenuItem>
                  <MenuItem value="garden">Garden</MenuItem>
                  <MenuItem value="land">Land</MenuItem>
                  <MenuItem value="rural">Rural</MenuItem>
                  <MenuItem value="annexe">Annexe</MenuItem>
                </TextField>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} md={2}>
          <FormControl fullWidth>
            <InputLabel>Furnished</InputLabel>
            <Controller
              name="furnished"
              control={control}
              render={({ field }) => (
                <Select defaultValue="any" {...field} value={field.value}>
                  <MenuItem value="any">Any</MenuItem>
                  <MenuItem value="furnished">Furnished</MenuItem>
                  <MenuItem value="unfurnished">Unfurnished</MenuItem>
                  <MenuItem value="partFurnished">Part Furnished</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          display="flex"
          padding={1}
          alignItems="center"
          justifyContent={"center"}
        >
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{ borderRadius: "0px" }}
          >
            Find Properties
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PropertyFilter;
