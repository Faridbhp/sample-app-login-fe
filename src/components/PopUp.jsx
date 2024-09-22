// components/PopUp.jsx
import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: 10,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme, isSuccess }) => ({
  backgroundColor: isSuccess ? "#4CAF50" : "#F44336",
  color: "#fff",
  alignItems: "center",
  padding: "10px 20px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "blue",
  color: "#fff",
}));

const PopUp = ({ open, onClose, message, isSuccess }) => {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <StyledDialogTitle isSuccess={isSuccess}>
        <Typography style={{textAlign: 'center'}} variant="h6">{isSuccess ? "Success" : "Error"}</Typography>
      </StyledDialogTitle>
      <DialogContent>
        <Typography style={{marginTop: 10}} id="alert-dialog-description">
          {message || "No message available"}
        </Typography>
      </DialogContent>
      <DialogActions>
        <StyledButton onClick={onClose}>OK</StyledButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default PopUp;
