import { Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

type TextFieldWithValidationProps = {
  name: string;
  control: any;
  defaultValue: string;
  rules?: any;
  type?: string;
  label: string;
  children?: any;
} & TextFieldProps & { [key: string]: any };

const TextFieldWithValidation: React.FC<TextFieldWithValidationProps> = ({
  name,
  control,
  defaultValue,
  rules,
  label,
  children,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          margin="dense"
          {...props}
          error={!!error}
          helperText={error?.message}
          children={children}
        />
      )}
    />
  );
};

export default TextFieldWithValidation;
