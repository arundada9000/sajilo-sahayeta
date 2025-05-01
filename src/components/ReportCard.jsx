import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ReportCard = ({ report }) => (
  <Card sx={{ maxWidth: 345, m: 2 }}>
    <CardMedia
      component="img"
      height="140"
      image={report.image}
      alt={report.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {report.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {report.description}
      </Typography>
    </CardContent>
  </Card>
);

export default ReportCard;
