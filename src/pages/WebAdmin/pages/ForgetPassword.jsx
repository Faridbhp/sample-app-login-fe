// ForgetPassword.jsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Box,
  Alert,
} from "@mui/material";
import {
  clearData,
  forgotPasswordReducer,
} from "../../../reducer/forgotPasswordReducer";
import PopUp from "../components/PopUp";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "farid.bhp9431@gmail.com",
  });
  const { data: dataResetPassword } = useSelector(
    (state) => state.forgotPassword
  );
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(forgotPasswordReducer(formData))
        .unwrap()
        .then((resp) => {
          console.log('response', resp)
          // setOpen(true);
        });
    } catch (err) {
      console.error("ForgetPassword error:", err);
    }
  };

  const handleClose = async () => {
    try {
      await dispatch(clearData());

      // Close the dialog
      setOpen(false);

      // Navigate to the login page
      if (dataResetPassword) {
        navigate("/resetPassword");
      }
    } catch (error) {
      console.error("Failed to clear feedback:", error);
      // Optionally handle the error (e.g., show an error message)
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <PopUp
        open={open}
        onClose={handleClose}
        message={dataResetPassword?.message}
        isSuccess="Success"
      />
      <Paper
        elevation={3}
        style={{
          padding: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Forget Password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Email
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ForgetPassword;
