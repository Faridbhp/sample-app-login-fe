// Register.jsx
import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearData, registerUser } from "../reducer/registerReducer";
import PopUp from "../components/PopUp";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const steps = ["Personal Information", "Password"];

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
    // address: '',
  });

  const { data: dataRegister } = useSelector((state) => state.register);
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = async () => {
    try {
      // Dispatch the action to clear feedback
      await dispatch(clearData());

      // Close the dialog
      setOpen(false);

      // Navigate to the login page
      if (dataRegister?.status === "success") {
        navigate("/login");
      }
    } catch (error) {
      console.error("Failed to clear feedback:", error);
      // Optionally handle the error (e.g., show an error message)
    }
  };

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      // Handle form submission when the last step is reached
      try {
        const dataInsert = {
          name: formData.name,
          email: formData.email,
          no_telepon: formData.phoneNumber,
          password: formData.password,
        };
        // Replace with your API endpoint
        dispatch(registerUser(dataInsert))
          .unwrap()
          .then(() => {
            setOpen(true); // Redirect after 2 seconds
          });
      } catch (error) {
        console.error("Registration error:", error);
      }
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      navigate(-1);
    } else {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"} // Tipe input berubah berdasarkan state showPassword
              value={formData.password}
              onChange={handleChange}
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
            <TextField
              fullWidth
              margin="normal"
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"} // Tipe input berubah berdasarkan state showConfirmPassword
              value={formData.confirmPassword}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {dataRegister && (
        <Alert
          severity={dataRegister?.status === "success" ? "success" : "error"}
        >
          {dataRegister?.message}
        </Alert>
      )}
      {/* <PopUp
        open={!!dataRegister}
        onClose={handleClose}
        message={dataRegister?.message}
        isSuccess={dataRegister?.status}
      /> */}
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" component="h1" align="center">
          Register
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mt: 2 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 2 }}>{renderStepContent(activeStep)}</Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button onClick={handleBack} variant="outlined">
            &lt; Back
          </Button>
          <Button onClick={handleNext} variant="contained" color="primary">
            {activeStep === steps.length - 1 ? "Submit" : "Next >"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
