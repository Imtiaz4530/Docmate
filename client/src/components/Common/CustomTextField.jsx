import { TextField, Grid } from "@mui/material";
import PropTypes from "prop-types";

const CustomTextField = ({
  type,
  label,
  name,
  value,
  onChange,
  margin = "normal",
  fullWidth = true,
  disabled = false,
  gridProps = {},
}) => {
  const Content = (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      margin={margin}
      disabled={disabled}
      type={type || "string"}
    />
  );

  return gridProps ? (
    <Grid item {...gridProps}>
      {Content}
    </Grid>
  ) : (
    Content
  );
};

CustomTextField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  margin: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  gridProps: PropTypes.object,
};

export default CustomTextField;
