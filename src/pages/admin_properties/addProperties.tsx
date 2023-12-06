import React, { useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { SnackbarProvider, useSnackbar } from "notistack";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import Autocomplete from "@mui/material/Autocomplete";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import DatePickerWithValidation from "components/common/DatePicker";
import { ThemeContext } from "@emotion/react";
import { submitBookingRequest, submitProperty } from "services/apiService";
import { PropertyData, PropertyForm } from "services/findPropertyFilter";
import { DropzoneArea } from "material-ui-dropzone";
import ImageUpload, { handleImageUpload } from "components/common/imageUpload";
import { useNavigate } from "react-router-dom";

const featureOptions = ["Parking", "Appliances", "Gym", "Pool"];
const propertyTypeOptions = ["Apartment", "House", "Condo", "Townhouse"];
const furnishedOptions = ["Furnished", "Unfurnished"];

export default function AddProperties() {
  const methods = useForm();
  const theme = useTheme();
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = methods;
  const navigate = useNavigate();

  // start image upload
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  // end image upload

  // submission start
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function prepareData(data: any): PropertyForm {
    return {
      ...data,
      amount: Number(data?.amount),
      bath_number: Number(data?.bath_number),
      bed_number: Number(data?.bed_number),
      reception_number: Number(data?.reception_number),
      latitude: 38.8951,
      longitude: -77.0364,
    };
  }

  const onSubmit = handleSubmit(async (data: object) => {
    try {
      setLoading(true);
      const imageStrings: string[] = await handleImageUpload(selectedImages);
      data = { ...data, images: imageStrings };
      await submitProperty(prepareData(data));
      enqueueSnackbar("property registered successfully", {
        variant: "success",
      });
      reset();
    } catch (error: any) {
      if (error?.error?.field_error) {
        const errors = error.error.field_error;

        errors?.map((err: any) => {
          return enqueueSnackbar(`${err.name}: ${err.description}`, {
            variant: "error",
          });
        });
      } else {
        enqueueSnackbar(`${error?.error?.name}: ${error?.error?.description}`);
      }
    } finally {
      setLoading(false);
    }
  });

  // submission end

  return (
    <Box m={3}>
      <FormProvider {...methods}>
        <Card>
          <CardContent>
            <form onSubmit={onSubmit}>
              <Grid container>
                <Grid md={8}>
                  <Typography variant="h4" gutterBottom>
                    Add Property
                  </Typography>
                </Grid>
                <Grid
                  md={2}
                  display={"flex"}
                  justifyContent={"center"}
                  alignContent={"center"}
                  padding={theme.spacing(2)}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{
                      height: "100%",
                      boxShadow: "10px",
                      borderRadius: "0px",
                      width: "100%",
                      border: "2px solid #948c1e",
                      padding: "0px",
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
              <Divider />

              <Grid container spacing={2} sx={{ marginTop: 3 }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Address"
                    {...register("address", { required: true })}
                    fullWidth
                    error={!!errors.address}
                    helperText={errors.address && "Address is required"}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Amount"
                    type="number"
                    {...register("amount", { required: true })}
                    fullWidth
                    error={!!errors.amount}
                    helperText={errors.amount && "Amount is required"}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Number of Bath rooms"
                    type="number"
                    {...register("bath_number", { required: true })}
                    fullWidth
                    error={!!errors.bath_number}
                    helperText={errors.bath_number && "Number of Bath rooms"}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Number of Beds"
                    type="number"
                    {...register("bed_number", { required: true })}
                    fullWidth
                    error={!!errors.bed_number}
                    helperText={
                      errors.bed_number && "Number of Beds is required"
                    }
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="EPC"
                    {...register("epc", { required: true })}
                    fullWidth
                    error={!!errors.epc}
                    helperText={errors.epc && "EPC is required"}
                  />
                </Grid>
                <Grid item md={6}>
                  <Controller
                    name="features"
                    control={control}
                    defaultValue={[]}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Autocomplete
                        multiple
                        options={featureOptions}
                        value={field.value}
                        onChange={(event, newValue) => {
                          field.onChange(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Features"
                            fullWidth
                            error={!!errors.features}
                            helperText={
                              errors.features && "Features are required"
                            }
                          />
                        )}
                      />
                    )}
                  />
                </Grid>

                <Grid item md={6}>
                  <Controller
                    name="furnished"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Autocomplete
                        options={furnishedOptions}
                        value={field.value}
                        onChange={(event, newValue) => {
                          field.onChange(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Is Furnished?"
                            fullWidth
                            error={!!errors.furnished}
                            helperText={
                              errors.furnished && "'Is Furnished?' is required"
                            }
                          />
                        )}
                      />
                    )}
                  />
                </Grid>

                <Grid item md={6}>
                  <DatePickerWithValidation
                    name={"next_inspection_date"}
                    rules={{ required: true }}
                    label={"Next Inspection Date"}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Property Details"
                    {...register("property_details", { required: true })}
                    fullWidth
                    error={!!errors.property_details}
                    helperText={
                      errors.property_details && "Property Details are required"
                    }
                  />
                </Grid>
                <Grid item md={6}>
                  <Controller
                    name="property_type"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Autocomplete
                        options={propertyTypeOptions}
                        value={field.value}
                        onChange={(event, newValue) => {
                          field.onChange(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Property Type"
                            fullWidth
                            error={!!errors.property_type}
                            helperText={
                              errors.property_type &&
                              "Property Type is required"
                            }
                          />
                        )}
                      />
                    )}
                  />
                </Grid>

                <Grid item md={6}>
                  <TextField
                    label="Reception Number"
                    {...register("reception_number", { required: true })}
                    fullWidth
                    error={!!errors.reception_number}
                    helperText={
                      errors.reception_number && "Reception Number is required"
                    }
                  />
                </Grid>
                <Grid item md={6} display={"flex"} justifyContent={"center"}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Controller
                          name="is_student_property"
                          control={control}
                          defaultValue={false}
                          render={({ field }) => <Checkbox {...field} />}
                        />
                      }
                      label="Is Student Property"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid
                container
                p={2}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <ImageUpload
                  filesLimit={5}
                  onImageUpload={(images: any) => setSelectedImages(images)}
                />
              </Grid>
            </form>
          </CardContent>
        </Card>
      </FormProvider>
    </Box>
  );
}
