import { jsx as _jsx } from "react/jsx-runtime";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";
const DateTimePickerWithValidation = ({ name, control, rules, label, dv }) => {
    return (_jsx(Controller, { name: name, control: control, rules: rules, defaultValue: dayjs(dv), render: ({ field }) => (_jsx(DateTimePicker, { ...field, label: label, value: field.value || null, onChange: (date) => field.onChange(date) })) }));
};
export default DateTimePickerWithValidation;
