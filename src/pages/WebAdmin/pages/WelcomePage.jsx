import React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import WelcomePageStyles from "../styles/WelcomePage.jsx"; // Import styles
import { useNavigate } from "react-router-dom";

const WelcomePage = ({ handleNavigate }) => {
  const navigate = useNavigate();
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={WelcomePageStyles.container} // Apply container styles
    >
      <Box sx={WelcomePageStyles.box}>
        <Typography
          component="h1"
          variant="h3"
          gutterBottom
          sx={WelcomePageStyles.typographyHeading} // Apply heading styles
        >
          Welcome to My App
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 4, color: "#555", fontSize: "1.2rem" }}
        >
          Your journey to an amazing experience starts here.
        </Typography>
        <Card sx={WelcomePageStyles.card}>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Get started by creating an account or logging in if you already
              have one.
            </Typography>
          </CardContent>
        </Card>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          sx={WelcomePageStyles.buttonContained} // Apply button styles
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          fullWidth
          sx={WelcomePageStyles.buttonOutlined} // Apply button styles
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
       
      </Box>
    </Container>
  );
};

export default WelcomePage;
