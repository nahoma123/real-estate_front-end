import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const DatePickerWithValidation = ({ name, rules, label, dv, }) => {
    const { control } = useFormContext();
    return (_jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: _jsx(Controller, { name: name, control: control, rules: rules, defaultValue: dayjs(dv), render: ({ field }) => (_jsx(DatePicker, { ...field, label: label, value: field.value || null, onChange: (date) => field.onChange(date) })) }) }));
};
export default DatePickerWithValidation;
