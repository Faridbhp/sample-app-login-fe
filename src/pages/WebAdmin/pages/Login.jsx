// Login.jsx
import React, { useEffect, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../../reducer/loginReducer";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { validateRegisterReducer } from "../../../reducer/validateRegister";
import PopUp from "../components/PopUp";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: dataLogin, isLoading } = useSelector((state) => state.login);
  const [formData, setFormData] = useState({
    email: "farid.bhp9431@gmail.com",
    password: "P@svv0rd1",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [dataValidateRegister, setDataValidateRegister] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  useEffect(() => {
    // Mengambil semua query parameter
    const queryParams = new URLSearchParams(location.search);

    // Mendapatkan nilai token dan email dari URL
    const token = queryParams.get("token");
    const email = queryParams.get("email");
    console.log("token", token);
    console.log("email", email);
    if (token && email) {
      // Panggil fungsi untuk memvalidasi token dan email
      validateTokenAndEmail(token, email);
    }
  }, [location]);

  useEffect(() => {
    if (dataLogin?.status === "success") {
      navigate("/dashboard");
    }
  }, [dataLogin]);

  const validateTokenAndEmail = (token, email) => {
    dispatch(
      validateRegisterReducer({
        email,
        otp: token,
      })
    )
      .unwrap()
      .then((respon) => {
        console.log("respon validate", respon);
        setDataValidateRegister(respon);
        setOpen(true);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click");

    if (formData.password === "success") {
      navigate("/dashboard");
    }

    try {
      dispatch(loginUser(formData))
        .unwrap()
        .then(() => {});

      // Handle successful login here (e.g., redirect or save token)
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleClose = () => {
    // Menghapus parameter dari URL
    const params = new URLSearchParams(location.search);
    params.delete("email");
    params.delete("token");

    // Memperbarui URL tanpa menyegarkan halaman
    navigate({ pathname: location.pathname, search: params.toString() });

    // Tutup popup
    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 4 }}>
      <PopUp
        open={open}
        onClose={handleClose}
        message={dataValidateRegister?.message}
        isSuccess="Success"
      />
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: "16px",
          backgroundColor: "white",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          align="center"
          sx={{ fontWeight: "bold", color: "#333" }}
        >
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
            sx={{
              borderRadius: "20px",
              outline: "none",
              "&:focus": { outline: "none" },
              mt: 3,
              mb: 2,
            }}
            disabled={isLoading}
          >
            {isLoading ? "Mohon Tunggu..." : "Login"}
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: "20px",
              outline: "none",
              "&:focus": { outline: "none" },
              mb: 2,
            }}
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </Box>
        <Box display="flex" flexDirection="column">
          <Link variant="body2" onClick={() => navigate("/register")}>
            {"Don't have an account? Sign Up"}
          </Link>
          <Link variant="body2" onClick={() => navigate("/forgetPassword")}>
            Forgot password?
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
