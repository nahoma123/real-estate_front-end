import { Box, Button, LinearProgress } from "@mui/material";

type SubmitButtonProps = {
  isSubmitting: boolean;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      style={{ borderRadius: "0px", marginTop: "20px" }}
      fullWidth
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <Box width="100%">
          <LinearProgress color="primary" />
        </Box>
      ) : (
        "Login"
      )}
    </Button>
  );
};

export default SubmitButton;