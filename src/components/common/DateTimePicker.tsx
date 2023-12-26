import { DateTimePickerProps, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

type DateTimePickerWithValidationProps = {
  name: string;
  control: any;
  label: string;
  rules: any;
  dv?:any
} & DateTimePickerProps<Date>;

const DateTimePickerWithValidation: React.FC<
  DateTimePickerWithValidationProps
> = ({ name, control, rules, label,dv }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={dayjs(dv)}
      render={({ field }) => (
        <DateTimePicker
          {...field}
          label={label}
          value={field.value || null}
          onChange={(date: any) => field.onChange(date)}
        />
      )}
    />
  );
};

export default DateTimePickerWithValidation;
