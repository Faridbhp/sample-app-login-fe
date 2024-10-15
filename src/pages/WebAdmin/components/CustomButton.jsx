// ButtonCustom.js
import React from "react";
import Button from "@mui/material/Button"; // Assuming you're using Material-UI

const ButtonCustom = ({
  onClick,
  isDisabled = false,
  label,
  variant = "contained",
  color = "primary",
  ...props
}) => {
  return (
    <Button
      fullWidth
      variant={variant}
      color={color}
      sx={{
        borderRadius: "20px",
        outline: "none",
        "&:focus": { outline: "none" },
        margin: 1
      }}
      disabled={isDisabled}
      {...props}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default ButtonCustom;
