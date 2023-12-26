import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type DatePickerWithValidationProps = {
  name: string;
  rules: any;
  label: string;
  dv?: any;
};

const DatePickerWithValidation: React.FC<DatePickerWithValidationProps> = ({
  name,
  rules,
  label,
  dv,
}) => {
  const { control } = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={dayjs(dv)}
        render={({ field }) => (
          <DatePicker
            {...field}
            label={label}
            value={field.value || null}
            onChange={(date: any) => field.onChange(date)}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerWithValidation;
