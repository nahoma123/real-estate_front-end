import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { useSnackbar } from "notistack";
import { Box, Button, Card, CardContent, Checkbox, Divider, FormControlLabel, FormGroup, Grid, TextField, Typography, useTheme, } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import DatePickerWithValidation from "../../components/common/DatePicker";
import { submitProperty } from "../../services/apiService";
import ImageUpload, { handleImageUpload } from "../../components/common/imageUpload";
import { useNavigate } from "react-router-dom";
const featureOptions = ["Parking", "Appliances", "Gym", "Pool"];
const propertyTypeOptions = ["Apartment", "House", "Condo", "Townhouse"];
const furnishedOptions = ["Furnished", "Unfurnished"];
export default function AddProperties() {
    const methods = useForm();
    const theme = useTheme();
    const { handleSubmit, register, control, reset, formState: { errors }, } = methods;
    const navigate = useNavigate();
    // start image upload
    const [selectedImages, setSelectedImages] = useState([]);
    // end image upload
    // submission start
    const [loading, setLoading] = useState(false);
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
    const onSubmit = handleSubmit(async (data) => {
        try {
            setLoading(true);
            const imageStrings = await handleImageUpload(selectedImages);
            data = { ...data, images: imageStrings };
            await submitProperty(prepareData(data));
            enqueueSnackbar("property registered successfully", {
                variant: "success",
            });
            reset();
        }
        catch (error) {
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
        }
        finally {
            setLoading(false);
        }
    });
    // submission end
    return (_jsx(Box, { m: 3, children: _jsx(FormProvider, { ...methods, children: _jsx(Card, { children: _jsx(CardContent, { children: _jsxs("form", { onSubmit: onSubmit, children: [_jsxs(Grid, { container: true, children: [_jsx(Grid, { md: 8, children: _jsx(Typography, { variant: "h4", gutterBottom: true, children: "Add Property" }) }), _jsx(Grid, { md: 2, display: "flex", justifyContent: "center", alignContent: "center", padding: theme.spacing(2), children: _jsx(Button, { type: "submit", variant: "contained", color: "primary", style: {
                                                height: "100%",
                                                boxShadow: "10px",
                                                borderRadius: "0px",
                                                width: "100%",
                                                border: "2px solid #948c1e",
                                                padding: "0px",
                                            }, children: "Submit" }) })] }), _jsx(Divider, {}), _jsxs(Grid, { container: true, spacing: 2, sx: { marginTop: 3 }, children: [_jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { label: "Address", ...register("address", { required: true }), fullWidth: true, error: !!errors.address, helperText: errors.address && "Address is required" }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx(TextField, { label: "Amount", type: "number", ...register("amount", { required: true }), fullWidth: true, error: !!errors.amount, helperText: errors.amount && "Amount is required" }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(TextField, { label: "Number of Bath rooms", type: "number", ...register("bath_number", { required: true }), fullWidth: true, error: !!errors.bath_number, helperText: errors.bath_number && "Number of Bath rooms" }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(TextField, { label: "Number of Beds", type: "number", ...register("bed_number", { required: true }), fullWidth: true, error: !!errors.bed_number, helperText: errors.bed_number && "Number of Beds is required" }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(TextField, { label: "EPC", ...register("epc", { required: true }), fullWidth: true, error: !!errors.epc, helperText: errors.epc && "EPC is required" }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(Controller, { name: "features", control: control, defaultValue: [], rules: { required: true }, render: ({ field }) => (_jsx(Autocomplete, { multiple: true, options: featureOptions, value: field.value, onChange: (event, newValue) => {
                                                    field.onChange(newValue);
                                                }, renderInput: (params) => (_jsx(TextField, { ...params, label: "Features", fullWidth: true, error: !!errors.features, helperText: errors.features && "Features are required" })) })) }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(Controller, { name: "furnished", control: control, defaultValue: "", rules: { required: true }, render: ({ field }) => (_jsx(Autocomplete, { options: furnishedOptions, value: field.value, onChange: (event, newValue) => {
                                                    field.onChange(newValue);
                                                }, renderInput: (params) => (_jsx(TextField, { ...params, label: "Is Furnished?", fullWidth: true, error: !!errors.furnished, helperText: errors.furnished && "'Is Furnished?' is required" })) })) }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(DatePickerWithValidation, { name: "next_inspection_date", rules: { required: true }, label: "Next Inspection Date" }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(TextField, { label: "Property Details", ...register("property_details", { required: true }), fullWidth: true, error: !!errors.property_details, helperText: errors.property_details && "Property Details are required" }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(Controller, { name: "property_type", control: control, defaultValue: "", rules: { required: true }, render: ({ field }) => (_jsx(Autocomplete, { options: propertyTypeOptions, value: field.value, onChange: (event, newValue) => {
                                                    field.onChange(newValue);
                                                }, renderInput: (params) => (_jsx(TextField, { ...params, label: "Property Type", fullWidth: true, error: !!errors.property_type, helperText: errors.property_type &&
                                                        "Property Type is required" })) })) }) }), _jsx(Grid, { item: true, md: 6, children: _jsx(TextField, { label: "Reception Number", ...register("reception_number", { required: true }), fullWidth: true, error: !!errors.reception_number, helperText: errors.reception_number && "Reception Number is required" }) }), _jsx(Grid, { item: true, md: 6, display: "flex", justifyContent: "center", children: _jsx(FormGroup, { children: _jsx(FormControlLabel, { control: _jsx(Controller, { name: "is_student_property", control: control, defaultValue: false, render: ({ field }) => _jsx(Checkbox, { ...field }) }), label: "Is Student Property" }) }) })] }), _jsx(Grid, { container: true, p: 2, display: "flex", justifyContent: "center", alignContent: "center", children: _jsx(ImageUpload, { filesLimit: 5, onImageUpload: (images) => setSelectedImages(images) }) })] }) }) }) }) }));
}
