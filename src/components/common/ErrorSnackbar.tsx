import { Alert, Snackbar } from "@mui/material";

type ErrorSnackbarProps = {
  open: boolean;
  onClose: () => void;
  message: string | null;
};

const ErrorSnackbar: React.FC<ErrorSnackbarProps> = ({
  open,
  onClose,
  message,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert severity="error">{`${message}`}</Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;