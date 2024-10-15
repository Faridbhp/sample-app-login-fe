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
import { useDispatch, useSelector } from "react-redux";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
  });
  const { data: dataForgetPassword, isLoading } = useSelector(
    (state) => state.forgotPassword
  );

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
          console.log("response", resp);
        });
    } catch (err) {
      console.error("ForgetPassword error:", err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {dataForgetPassword && (
        <Alert
          severity={
            dataForgetPassword?.status === "success" ? "success" : "error"
          }
        >
          {dataForgetPassword?.message}
        </Alert>
      )}
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
            disabled={isLoading}
          >
            {isLoading ? "Mohon Tunggu.." : "Send Email"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ForgetPassword;
