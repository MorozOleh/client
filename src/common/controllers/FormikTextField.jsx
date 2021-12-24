import { useField } from "formik";
import { TextField, Typography } from "@mui/material";

const FormikTextField = ({ name, errorProps, ...props }) => {
  const [fields, meta] = useField(name);
  const isError = !!(props.error && meta.touched && meta.error);

  return (
    <>
      <TextField variant="outlined" {...fields} {...props} error={isError} />
      <Typography color="error" sx={{ mt: 1 }} {...errorProps}>
        {isError && meta.error}
      </Typography>
    </>
  );
};

export default FormikTextField;
