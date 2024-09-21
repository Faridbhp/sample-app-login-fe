// Login.jsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Box,
  Alert,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../reducer/loginReducer";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: dataLogin } = useSelector((state) => state.login);
  const [formData, setFormData] = useState({
    email: "faridbhp9431@gmail.com",
    password: "P@svv0rdd",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click");

    try {
      dispatch(loginUser(formData))
        .unwrap()
        .then(() => {});

      // Handle successful login here (e.g., redirect or save token)
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
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
          Login
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {dataLogin && (
            <Alert
              severity={dataLogin?.status === "success" ? "success" : "error"}
            >
              {dataLogin?.message}
            </Alert>
          )}
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
        <Box display="flex" flexDirection="column">
          <Link variant="body2" onClick={() => navigate("/register")}>
            {"Don't have an account? Sign Up"}
          </Link>
          <Link
            variant="body2"
            onClick={() => navigate("/forgetPassword")}
          >
            Forgot password?
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
