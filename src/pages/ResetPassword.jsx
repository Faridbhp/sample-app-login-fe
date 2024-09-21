import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import PopUp from "../components/PopUp";
import { resetPasswordReducer } from "../reducer/resetPasswordReducer";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: "faridbhp9431@gmail.com",
    password: "",
    confirmPassword: "",
    token: "",
  });
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(resetPasswordReducer(formData))
        .unwrap()
        .then(() => {
          setOpen(true);
        });
    } catch (err) {
      console.error("ResetPassword error:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = async () => {
    try {
      // Dispatch the action to clear feedback
      // await dispatch(clearData());

      // Close the dialog
      setOpen(false);
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
        message={"dataRegister?.message"}
        isSuccess={"dataRegister?.status"}
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
          Reset Password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Reset Password
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ResetPassword;
