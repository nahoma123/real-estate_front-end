import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm, Controller } from "react-hook-form";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, } from "@mui/material";
const PropertyFilter = ({ onSubmit }) => {
    const { handleSubmit, control, formState } = useForm();
    const handleFormSubmit = (data) => {
        onSubmit(data);
    };
    const propertyTypes = [
        { label: "House", value: "house" },
        { label: "Bungalow", value: "bungalow" },
        { label: "Flat", value: "flat" },
        { label: "Garage", value: "garage" },
        { label: "Room", value: "room" },
    ];
    return (_jsx("form", { onSubmit: handleSubmit(handleFormSubmit), children: _jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { item: true, xs: 12, md: 2, children: _jsx(Controller, { name: "address", control: control, rules: { required: "Address is required" }, render: ({ field }) => (_jsx(TextField, { label: "Address", value: field.value || "", onChange: (e) => field.onChange(e.target.value), onBlur: field.onBlur, error: !!formState.errors?.address, helperText: formState.errors?.address?.message || "", fullWidth: true, required: true })) }) }), _jsx(Grid, { item: true, xs: 6, md: 2, children: _jsx(Controller, { name: "minAmount", control: control, render: ({ field }) => (_jsx(TextField, { label: "Min Amount", ...field, fullWidth: true })) }) }), _jsx(Grid, { item: true, xs: 6, md: 2, children: _jsx(Controller, { name: "maxAmount", control: control, render: ({ field }) => (_jsx(TextField, { label: "Max Amount", ...field, fullWidth: true })) }) }), _jsx(Grid, { item: true, xs: 6, md: 2, children: _jsx(Controller, { name: "minBeds", control: control, render: ({ field }) => (_jsx(TextField, { value: field.value || "", label: "Min Beds", onChange: (e) => field.onChange(e.target.value), onBlur: field.onBlur, fullWidth: true })) }) }), _jsx(Grid, { item: true, xs: 6, md: 2, children: _jsx(Controller, { name: "maxBeds", control: control, render: ({ field }) => (_jsx(TextField, { label: "Max Beds", ...field, fullWidth: true })) }) }), _jsx(Grid, { item: true, xs: 6, md: 2, children: _jsx(FormControl, { fullWidth: true, children: _jsx(Controller, { control: control, name: "propertyTypes", defaultValue: [], render: ({ field }) => (_jsx(TextField, { ...field, select: true, id: "PropertyTypes", variant: "outlined", label: "Property Types", SelectProps: {
                                    multiple: true,
                                    renderValue: (selected) => selected.join(", "),
                                }, children: propertyTypes.map((option) => (_jsx(MenuItem, { value: option.value, children: option.label }, option.value))) })) }) }) }), _jsx(Grid, { item: true, xs: 6, md: 2, children: _jsx(FormControl, { fullWidth: true, children: _jsx(Controller, { name: "mustHaves", control: control, defaultValue: [], render: ({ field }) => (_jsxs(TextField, { ...field, select: true, id: "MustHaves", variant: "outlined", label: "Must Haves", SelectProps: {
                                    multiple: true,
                                    renderValue: (selected) => selected.join(", "),
                                }, children: [_jsx(MenuItem, { value: "parking", children: "Parking" }), _jsx(MenuItem, { value: "garden", children: "Garden" }), _jsx(MenuItem, { value: "land", children: "Land" }), _jsx(MenuItem, { value: "rural", children: "Rural" }), _jsx(MenuItem, { value: "annexe", children: "Annexe" })] })) }) }) }), _jsx(Grid, { item: true, xs: 6, md: 2, children: _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { children: "Furnished" }), _jsx(Controller, { name: "furnished", control: control, render: ({ field }) => (_jsxs(Select, { defaultValue: "any", ...field, value: field.value, children: [_jsx(MenuItem, { value: "any", children: "Any" }), _jsx(MenuItem, { value: "furnished", children: "Furnished" }), _jsx(MenuItem, { value: "unfurnished", children: "Unfurnished" }), _jsx(MenuItem, { value: "partFurnished", children: "Part Furnished" })] })) })] }) }), _jsx(Grid, { item: true, xs: 6, md: 3, display: "flex", padding: 1, alignItems: "center", justifyContent: "center", children: _jsx(Button, { type: "submit", variant: "contained", fullWidth: true, style: { borderRadius: "0px" }, children: "Find Properties" }) })] }) }));
};
export default PropertyFilter;
