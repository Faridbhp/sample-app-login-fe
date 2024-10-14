import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
const Home = () => {
  return (
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
  );
};
export default Home;
