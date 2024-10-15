import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Divider,
  Alert,
} from "@mui/material";
import ButtonCustom from "../../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import PasswordInput from "../../components/PasswordInput";
import {
  changePasswordReducer,
  clearDataChangePassword,
} from "../../../../reducer/changePasswordReducer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);
  const { data: dataUser } = useSelector((state) => state.dataUser.data);
  const { data: dataChangePassword, isLoading } = useSelector(
    (state) => state.changePassword
  );

  const [showPasswordCurrent, setShowPasswordCurrent] = useState(false);
  const handleClickShowPasswordCurrent = () =>
    setShowPasswordCurrent((show) => !show);
  const [showPasswordNew, setShowPasswordNew] = useState(false);
  const handleClickShowPasswordNew = () => setShowPasswordNew((show) => !show);
  const [showPasswordConfirm, setShowPassworConfirm] = useState(false);
  const handleClickShowPasswordConfirm = () =>
    setShowPassworConfirm((show) => !show);

  useEffect(() => {
    dispatch(clearDataChangePassword());
  }, [])

  const handlePasswordChangeSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    console.log("Password changed successfully");
    // Reset form fields

    dispatch(
      changePasswordReducer({
        old_password: currentPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      })
    )
      .unwrap()
      .then((resp) => {
        if (resp.status == "success") {
          setTimeout(() => {
            navigate("/dashboard/home");
          }, 2000);
        }
      });
  };

  const toggleChangePasswordForm = () => {
    setShowChangePassword((prev) => !prev);
  };

  return (
    <Container maxWidth="sm">
      {dataChangePassword && (
        <Alert
          severity={
            dataChangePassword?.status === "success" ? "success" : "error"
          }
        >
          {dataChangePassword?.message}
        </Alert>
      )}
      <Typography variant="h5" align="center" gutterBottom>
        User Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Name:</strong> {dataUser.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Email:</strong> {dataUser.email}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />

      {showChangePassword && (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <PasswordInput
              fullWidth
              label="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              showPassword={showPasswordCurrent}
              handleClickShowPassword={handleClickShowPasswordCurrent}
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordInput
              fullWidth
              label="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              showPassword={showPasswordNew}
              handleClickShowPassword={handleClickShowPasswordNew}
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordInput
              fullWidth
              label="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              showPassword={showPasswordConfirm}
              handleClickShowPassword={handleClickShowPasswordConfirm}
            />
          </Grid>
          <Grid item xs={12} container justifyContent="center">
            <Grid item sm={6} xs={9}>
              <ButtonCustom
                isDisabled={
                  isLoading ||
                  currentPassword === "" ||
                  newPassword === "" ||
                  confirmPassword === ""
                }
                variant="contained"
                color="primary"
                label={isLoading ? "Mohon Tunggu.." : "Submit New Password"}
                onClick={handlePasswordChangeSubmit}
                style={{ width: "100%" }} // Ensure the button fills the grid item
              />
            </Grid>
          </Grid>
        </Grid>
      )}
      <Grid item xs={12} container justifyContent="center" marginBottom={10}>
        <Grid item sm={6} xs={9}>
          <ButtonCustom
            variant="contained"
            color="primary"
            label={showChangePassword ? "Cancel" : "Change Password"}
            onClick={toggleChangePasswordForm}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
