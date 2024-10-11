import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearData } from "../../../reducer/loginReducer";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Logika untuk proses logout
    console.log("User logged out");
    // Arahkan ke halaman login setelah logout (misal, menggunakan useNavigate dari react-router-dom)
    navigate("/login");
    dispatch(clearData());
  };

  const menuItems = ["Dashboard", "Profile", "Settings", "Reports"];

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        anchor="left"
        style={{ width: "240px", flexShrink: 0 }}
        PaperProps={{ style: { width: "240px" } }}
      >
        <div style={{ padding: "10px" }}>
          <Typography variant="h5" align="center">
            Menu
          </Typography>
        </div>
        <Divider />
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div style={{ flexGrow: 1 }}>
        {/* Navbar */}
        <AppBar position="fixed" style={{ zIndex: 1201 }}>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Typography variant="h6">Dashboard</Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        {/* Spacing untuk AppBar */}
        <Toolbar />

        {/* Main Content */}
        <Grid container spacing={3} style={{ padding: "20px" }}>
          {/* Statistics Cards */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">100</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">Active Users</Typography>
              <Typography variant="h4">80</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">New Registrations</Typography>
              <Typography variant="h4">5</Typography>
            </Paper>
          </Grid>

          {/* Recent Activity */}
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6" component="h2">
                Recent Activity
              </Typography>
              <ul>
                <li>User A registered</li>
                <li>User B updated profile</li>
                <li>User C made a purchase</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
