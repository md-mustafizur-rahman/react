import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* You can use data from props to dynamically render content */}
        {/* For example, assuming data has a title and description */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data || "Default Title"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description ||
              "Click The To Get More information"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
