// WelcomePageStyles.js
const WelcomePageStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #6c63ff, #3f3d56)',
    padding: 3,
    textAlign: 'center',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    '@media (max-width: 600px)': {
      padding: 2,
    },
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  typographyHeading: {
    fontWeight: 'bold',
    color: '#333',
    '@media (max-width: 600px)': {
      fontSize: '2rem',
    },
  },
  card: {
    maxWidth: 345,
    mb: 4,
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    borderRadius: 2,
    transform: 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '@media (max-width: 600px)': {
      maxWidth: '100%',
    },
  },
  buttonContained: {
    mt: 2,
    mb: 1,
    padding: '12px 24px',
    fontSize: '1rem',
    background: 'linear-gradient(135deg, #6c63ff, #3f3d56)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      background: 'linear-gradient(135deg, #3f3d56, #6c63ff)',
    },
    '@media (max-width: 600px)': {
      padding: '10px',
      fontSize: '0.9rem',
    },
  },
  buttonOutlined: {
    mt: 1,
    padding: '12px 24px',
    fontSize: '1rem',
    borderColor: '#6c63ff',
    color: '#6c63ff',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      borderColor: '#3f3d56',
      color: '#3f3d56',
    },
    '@media (max-width: 600px)': {
      padding: '10px',
      fontSize: '0.9rem',
    },
  },
};

export default WelcomePageStyles;
