import React, { useState } from "react";
import { Box, TextField, Button, Typography, Input } from "@mui/material";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setFormData({
        ...formData,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Report Submitted (check console)");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Submit an Issue
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Input
          type="file"
          name="image"
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button onClick={handleLocation} variant="outlined" sx={{ mb: 2 }}>
          Auto-detect Location
        </Button>
        <TextField
          fullWidth
          label="Latitude"
          name="latitude"
          value={formData.latitude}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Longitude"
          name="longitude"
          value={formData.longitude}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained">
          Submit Report
        </Button>
      </form>
    </Box>
  );
};

export default ReportForm;
