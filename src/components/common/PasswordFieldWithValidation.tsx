import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

type PasswordFieldWithValidationProps = {
  name: string;
  control: any;
  defaultValue: string;
  rules: any;
  label: string;
};

const PasswordFieldWithValidation: React.FC<PasswordFieldWithValidationProps> = ({
  name,
  control,
  defaultValue,
  rules,
  label,
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
          type="password"
          variant="outlined"
          fullWidth
          margin="dense"
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default PasswordFieldWithValidation;