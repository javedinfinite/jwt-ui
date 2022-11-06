import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";

export const OneTopHacker = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="hacker image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
          Rank : <Chip color="success" label={item.overall_rank} size="small" />
        </Typography>
        <Tooltip arrow placement="top" title={item.user_name}>
          <Typography variant="body2" color="text.secondary" component="span">
            &nbsp; User Name :{" "}
            <Chip
              color="secondary"
              label={
                item.user_name.length < 5
                  ? item.user_name
                  : item.user_name.substring(0, 5) + "..."
              }
              size="small"
            />
          </Typography>
        </Tooltip>
        <Typography variant="body2" color="text.secondary" component="div">
          Type : <Chip color="info" label={item.user_type} size="small" />
        </Typography>
      </CardContent>
    </Card>
  );
};
