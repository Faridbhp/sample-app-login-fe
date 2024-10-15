import React, { useState } from "react";
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
  IconButton,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearDataLogin } from "../../../reducer/loginReducer";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/login");
    dispatch(clearDataLogin());
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Dashboard", path: "home" },
    { text: "Profile", path: "profile" },
  ];

  const drawer = (
    <div>
      <div style={{ padding: "10px" }}>
        <Typography variant="h5" align="center">
          Menu
        </Typography>
      </div>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={item.text} component={Link} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar for larger screens */}
      <Hidden mdDown>
        <Drawer
          variant="permanent"
          anchor="left"
          style={{ width: "240px", flexShrink: 0 }}
          PaperProps={{ style: { width: "240px" } }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      {/* Temporary Drawer for smaller screens */}
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          PaperProps={{ style: { width: "240px" } }}
          ModalProps={{
            keepMounted: true, // Better performance on mobile
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      <div style={{ flexGrow: 1 }}>
        {/* Navbar */}
        <AppBar position="fixed" style={{ zIndex: 1201 }}>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Dashboard</Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        {/* Spacing for AppBar */}
        <Toolbar />

        {/* Main Content */}
        <div
          style={{
            backgroundColor: "white",
            minWidth: "100%",
            borderRadius: 15,
            justifyContent: "center",
            paddingTop: '20px'
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
