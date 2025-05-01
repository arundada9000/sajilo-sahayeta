import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => (
  <Box sx={{ p: 4, textAlign: "center" }}>
    <Typography variant="h4" gutterBottom>
      Welcome to Sajilo Sahayata
    </Typography>
    <Typography variant="body1" gutterBottom>
      Report local issues like road damage, water leaks, garbage, etc.
    </Typography>
    <Button variant="contained" component={Link} to="/report" sx={{ m: 1 }}>
      Submit a Report
    </Button>
    <Button variant="outlined" component={Link} to="/reports" sx={{ m: 1 }}>
      View Reports
    </Button>
  </Box>
);

export default Home;
