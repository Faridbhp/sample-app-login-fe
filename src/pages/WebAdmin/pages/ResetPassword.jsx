import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { resetPasswordReducer } from "../../../reducer/resetPasswordReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    token: "",
  });
  const { data: dataResetPassword, isLoading } = useSelector(
    (state) => state.resetPassword
  );

  useEffect(() => {
    // Mengambil semua query parameter
    const queryParams = new URLSearchParams(location.search);

    // Mendapatkan nilai token dan email dari URL
    const token = queryParams.get("token");
    const email = queryParams.get("email");
    console.log("token", token);
    console.log("email", email);
    setFormData({ ...formData, token, email });
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(resetPasswordReducer(formData))
        .unwrap()
        .then((resp) => {
          console.log("resp", resp.status);
          if (resp.status == "success") {
            setTimeout(() => {
              navigate("/login");
            }, 3000);
          }
        });
    } catch (err) {
      console.error("ResetPassword error:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container component="main" maxWidth="xs">
      {dataResetPassword && (
        <Alert
          severity={
            dataResetPassword?.status === "success" ? "success" : "error"
          }
        >
          {dataResetPassword?.message}
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
            disabled={isLoading}
          >
            {isLoading ? "Mohon tunggu ..." : "Reset Password"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ResetPassword;
