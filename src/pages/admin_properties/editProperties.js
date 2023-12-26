import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { useSnackbar } from "notistack";
import { Box, Button, Card, CardContent, Checkbox, Divider, FormControlLabel, FormGroup, Grid, LinearProgress, TextField, Typography, useTheme, } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import DatePickerWithValidation from "../../components/common/DatePicker";
import { updateProperty } from "../../services/apiService";
import ImageUpload, { handleImageUpload } from "../../components/common/imageUpload";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, } from "@tanstack/react-query";
import { getPropertyById } from "../../utils/getRequest";
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
    const { handleSubmit, register, control, reset, formState: { errors }, } = methods;
    useEffect(() => {
        if (propertyQuery.data) {
            let data = propertyQuery.data;
            if (propertyQuery.data?.furniture &&
                typeof propertyQuery.data?.furniture == "string") {
                data.furniture = propertyQuery.data?.furniture?.split(",");
            }
            if (propertyQuery.data?.features &&
                typeof propertyQuery.data?.features == "string") {
                data.features = propertyQuery.data?.features?.split(",");
            }
            data.next_inspection_date = dayjs(propertyQuery.data?.next_inspection_date);
            console.log("data", data);
            reset(data);
        }
    }, [propertyQuery.data, reset]);
    // useEffect(() => {
    //   reset(propertyQuery.data); // Update the form values when propertyQuery.data changes
    // }, [propertyQuery.data, reset]);
    // start image upload
    const [selectedImages, setSelectedImages] = useState([]);
    // end image upload
    // submission start
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    function prepareData(data) {
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
    const submitPropertyMutation = async (data) => {
        const imageStrings = await handleImageUpload(selectedImages);
        data = { ...data, images: imageStrings };
        return updateProperty(property_id, prepareData(data));
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
        onError: (error) => {
            if (error?.error?.field_error) {
                const errors = error.error.field_error;
                errors?.map((err) => {
                    return enqueueSnackbar(`${err.name}: ${err.description}`, {
                        variant: "error",
                    });
                });
            }
            else {
                enqueueSnackbar(`${error?.error?.name}: ${error?.error?.description}`);
            }
        },
    });
    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data);
    });
    // submission end
    return (_jsx(Box, { m: 3, children: _jsxs(FormProvider, { ...methods, children: [_jsx(Card, { children: _jsx(CardContent, { children: !propertyQuery.isLoading && (_jsxs("form", { onSubmit: onSubmit, children: [_jsx(Box, { marginBottom: 3, children: propertyQuery.isLoading && _jsx(LinearProgress, {}) }), _jsxs(Grid, { container: true, children: [_jsx(Grid, { md: 8, children: _jsx(Typography, { variant: "h4", gutterBottom: true, children: "Edit Property" }) }), _jsx(Grid, { md: 2, display: "flex", justifyContent: "center", alignContent: "center", padding: theme.spacing(2), children: _jsx(Button, { type: "submit", variant: "contained", color: "primary", style: {
                                                    height: "100%",
                                                    boxShadow: "10px",
                                                    borderRadius: "0px",
                                                    width: "100%",
                                                    border: "2px solid #948c1e",
                                                    padding: "0px",
                                                }, children: "Save" }) })] }), _jsx(Divider, {}), _jsxs(Grid, { container: true, spacing: 2, sx: { marginTop: 3 }, children: [_jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { label: "Address", InputLabelProps: { shrink: true }, ...register("address", { required: true }), fullWidth: true, error: !!errors.address, helperText: errors.address && "Address is required" }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { label: "Amount", type: "number", InputLabelProps: { shrink: true }, ...register("amount", { required: true }), fullWidth: true, error: !!errors.amount, helperText: errors.amount && "Amount is required" }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(TextField, { label: "Number of Bath rooms", type: "number", InputLabelProps: { shrink: true }, ...register("bath_number", { required: true }), fullWidth: true, error: !!errors.bath_number, helperText: errors.bath_number && "Number of Bath rooms" }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(TextField, { label: "Number of Beds", InputLabelProps: { shrink: true }, type: "number", ...register("bed_number", { required: true }), fullWidth: true, error: !!errors.bed_number, helperText: errors.bed_number && "Number of Beds is required" }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(TextField, { label: "EPC", InputLabelProps: { shrink: true }, ...register("epc", { required: true }), fullWidth: true, error: !!errors.epc, helperText: errors.epc && "EPC is required" }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(Controller, { name: "features", control: control, defaultValue: [], rules: { required: true }, render: ({ field }) => (_jsx(Autocomplete, { multiple: true, options: featureOptions, value: field.value, onChange: (event, newValue) => {
                                                        field.onChange(newValue);
                                                    }, renderInput: (params) => (_jsx(TextField, { ...params, label: "Features", InputLabelProps: { shrink: true }, fullWidth: true, error: !!errors.features, helperText: errors.features && "Features are required" })) })) }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(Controller, { name: "furnished", control: control, defaultValue: "", rules: { required: true }, render: ({ field }) => (_jsx(Autocomplete, { options: furnishedOptions, value: field.value, onChange: (event, newValue) => {
                                                        field.onChange(newValue);
                                                    }, renderInput: (params) => (_jsx(TextField, { ...params, label: "Is Furnished?", InputLabelProps: { shrink: true }, fullWidth: true, error: !!errors.furnished, helperText: errors.furnished &&
                                                            "'Is Furnished?' is required" })) })) }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(DatePickerWithValidation, { name: "next_inspection_date", rules: { required: true }, label: "Next Inspection Date" }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(TextField, { label: "Property Details", InputLabelProps: { shrink: true }, ...register("property_details", { required: true }), fullWidth: true, error: !!errors.property_details, helperText: errors.property_details &&
                                                    "Property Details are required" }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(Controller, { name: "property_type", control: control, defaultValue: "", rules: { required: true }, render: ({ field }) => (_jsx(Autocomplete, { options: propertyTypeOptions, value: field.value, onChange: (event, newValue) => {
                                                        field.onChange(newValue);
                                                    }, renderInput: (params) => (_jsx(TextField, { ...params, label: "Property Type", InputLabelProps: { shrink: true }, fullWidth: true, error: !!errors.property_type, helperText: errors.property_type &&
                                                            "Property Type is required" })) })) }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(TextField, { label: "Reception Number", InputLabelProps: { shrink: true }, ...register("reception_number", { required: true }), fullWidth: true, error: !!errors.reception_number, helperText: errors.reception_number &&
                                                    "Reception Number is required" }) }), _jsx(Grid, { item: true, md: 6, display: "flex", justifyContent: "center", children: _jsx(FormGroup, { children: _jsx(FormControlLabel, { control: _jsx(Controller, { name: "is_student_property", control: control, defaultValue: false, render: ({ field }) => _jsx(Checkbox, { ...field }) }), label: "Is Student Property" }) }) })] }), _jsx(Grid, { container: true, p: 2, display: "flex", justifyContent: "center", alignContent: "center", children: _jsx(ImageUpload, { initialImageLinks: formatImage(propertyQuery.data?.images), filesLimit: 5, onImageUpload: (images) => setSelectedImages(images) }) })] })) }) }), _jsx(DevTool, { control: control })] }) }));
}
