import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => (
  <AppBar position="static">
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography variant="h6">Sajilo Sahayata</Typography>
      <div>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/report">
          Report
        </Button>
        <Button color="inherit" component={Link} to="/map">
          Map
        </Button>
        <Button color="inherit" component={Link} to="/reports">
          Reports
        </Button>
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;
