import React from 'react';
import { Container, Button, Typography, Box, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        textAlign: 'center',
        padding: 3
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '400px',
          margin: '0 auto'
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#333' }}
        >
          Welcome to Our Sample Application
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 4, color: '#555' }}
        >
          Your journey to an amazing experience starts here.
        </Typography>
        <Card
          sx={{
            maxWidth: 345,
            mb: 4,
            boxShadow: 3,
            borderRadius: 2
          }}
        >
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Get started by creating an account or logging in if you already have one.
            </Typography>
          </CardContent>
        </Card>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => handleNavigate('/register')}
          sx={{ mt: 2, mb: 1 }}
        >
          Register
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          onClick={() => handleNavigate('/login')}
          sx={{ mt: 1 }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default WelcomePage;
