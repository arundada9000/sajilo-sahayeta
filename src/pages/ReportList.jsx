import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ReportCard from "../components/ReportCard";
import reports from "../data/reports";

const ReportList = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h5" gutterBottom>
      All Reported Issues
    </Typography>
    <Grid container spacing={2}>
      {reports.map((report, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ReportCard report={report} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ReportList;
