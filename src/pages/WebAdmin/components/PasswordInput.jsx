import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordInput = ({
  fullWidth,
  margin = "normal",
  label,
  name = "password",
  value,
  onChange,
  showPassword = false,
  handleClickShowPassword,
}) => {
  return (
    <TextField
      fullWidth={fullWidth}
      margin={margin}
      label={label}
      name={name}
      type={showPassword ? "text" : "password"}
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
