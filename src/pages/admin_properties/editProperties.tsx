import React, { useEffect, useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { SnackbarProvider, useSnackbar } from "notistack";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  LinearProgress,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import Autocomplete from "@mui/material/Autocomplete";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import DatePickerWithValidation from "../../components/common/DatePicker";
import { ThemeContext } from "@emotion/react";
import { submitBookingRequest, submitProperty, updateProperty } from "../../services/apiService";
import { PropertyData, PropertyForm } from "../../services/findPropertyFilter";
import { DropzoneArea } from "material-ui-dropzone";
import ImageUpload, { handleImageUpload } from "../../components/common/imageUpload";
import { useNavigate, useParams } from "react-router-dom";
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { FilterType, getPropertyById, getRequest } from "../../utils/getRequest";
import { DevTool } from "@hookform/devtools";
import dayjs from "dayjs";
import { formatImage } from "../../utils/formalImageLinks";

const featureOptions = ["Parking", "Appliances", "Gym", "Pool"];
const propertyTypeOptions = ["Apartment", "House", "Condo", "Townhouse"];
const furnishedOptions = ["Furnished", "Unfurnished"];

export default function EditProperty() {
  // fetch data start
  // Fetch property data using React Query
  const { property_id } = useParams();

  const propertyQuery = useQuery({
    queryKey: ["property", property_id],
    enabled: !!property_id,
    queryFn: () => {
      return getPropertyById(property_id || "");
    },
  });

  // fetch data end

  const methods = useForm({});
  const theme = useTheme();
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (propertyQuery.data) {
      let data = propertyQuery.data;
      if (
        propertyQuery.data?.furniture &&
        typeof propertyQuery.data?.furniture == "string"
      ) {
        data.furniture = propertyQuery.data?.furniture?.split(",");
      }

      if (
        propertyQuery.data?.features &&
        typeof propertyQuery.data?.features == "string"
      ) {
        data.features = propertyQuery.data?.features?.split(",");
      }
      data.next_inspection_date = dayjs(
        propertyQuery.data?.next_inspection_date
      );
      console.log("data", data);
      reset(data);
    }
  }, [propertyQuery.data, reset]);

  // useEffect(() => {
  //   reset(propertyQuery.data); // Update the form values when propertyQuery.data changes
  // }, [propertyQuery.data, reset]);

  // start image upload
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  // end image upload

  // submission start
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
  // Define your mutation function outside of the component
  const submitPropertyMutation = async (data: any) => {
    if(property_id !== undefined){
      const imageStrings = await handleImageUpload(selectedImages);
      data = { ...data, images: imageStrings };
      return updateProperty(property_id, prepareData(data));
    }
  };

  // Inside your component
  const mutation = useMutation({

    mutationFn: (propertyData) => {
      return submitPropertyMutation(prepareData(propertyData));
    },
    onSuccess: () => {
      enqueueSnackbar("updated successfully", {
        variant: "success",
      });
    },
    onError: (error: any) => {
      if (error?.error?.field_error) {
        const errors = error.error.field_error;
        errors?.map((err:any) => {
          return enqueueSnackbar(`${err.name}: ${err.description}`, {
            variant: "error",
          });
        });
      } else {
        enqueueSnackbar(`${error?.error?.name}: ${error?.error?.description}`);
      }
    },
  });

  const onSubmit = handleSubmit((data:any) => {
    mutation.mutate(data);
  });
  // submission end

  return (
    <Box m={3}>
      <FormProvider {...methods}>
        <Card>
          <CardContent>
            {!propertyQuery.isLoading && (
              <form onSubmit={onSubmit}>
                <Box marginBottom={3}>
                  {propertyQuery.isLoading && <LinearProgress />}
                </Box>
                <Grid container>
                  <Grid md={8}>
                    <Typography variant="h4" gutterBottom>
                      Edit Property
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
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <Divider />

                <Grid container spacing={2} sx={{ marginTop: 3 }}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Address"
                      InputLabelProps={{ shrink: true }}
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
                      InputLabelProps={{ shrink: true }}
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
                      InputLabelProps={{ shrink: true }}
                      {...register("bath_number", { required: true })}
                      fullWidth
                      error={!!errors.bath_number}
                      helperText={errors.bath_number && "Number of Bath rooms"}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      label="Number of Beds"
                      InputLabelProps={{ shrink: true }}
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
                      InputLabelProps={{ shrink: true }}
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
                              InputLabelProps={{ shrink: true }}
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
                              InputLabelProps={{ shrink: true }}
                              fullWidth
                              error={!!errors.furnished}
                              helperText={
                                errors.furnished &&
                                "'Is Furnished?' is required"
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
                      InputLabelProps={{ shrink: true }}
                      {...register("property_details", { required: true })}
                      fullWidth
                      error={!!errors.property_details}
                      helperText={
                        errors.property_details &&
                        "Property Details are required"
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
                              InputLabelProps={{ shrink: true }}
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
                      InputLabelProps={{ shrink: true }}
                      {...register("reception_number", { required: true })}
                      fullWidth
                      error={!!errors.reception_number}
                      helperText={
                        errors.reception_number &&
                        "Reception Number is required"
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
                    initialImageLinks={formatImage(propertyQuery.data?.images)}
                    filesLimit={5}
                    onImageUpload={(images: any) => setSelectedImages(images)}
                  />
                </Grid>
              </form>
            )}
          </CardContent>
        </Card>

        <DevTool control={control} />
      </FormProvider>
    </Box>
  );
}
