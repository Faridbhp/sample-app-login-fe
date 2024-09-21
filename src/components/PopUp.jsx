// components/PopUp.jsx
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

const PopUp = ({ open, onClose, message, isSuccess }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {isSuccess ? 'Success' : 'Error'}
      </DialogTitle>
      <DialogContent>
        <Typography id="alert-dialog-description">
          {message || 'No message available'}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopUp;
