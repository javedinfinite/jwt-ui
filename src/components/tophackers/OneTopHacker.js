import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';

export const OneTopHacker = ({item}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://cdn.pixabay.com/photo/2017/05/17/15/08/ransomware-2321110_1280.jpg"
        alt="green iguana"
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
        &nbsp; User Name : <Chip color="secondary" label={item.user_name.length<5 ? item.user_name : item.user_name.substring(0,5)+'...'} size="small" />
        </Typography>
        </Tooltip>
        <Typography variant="body2" color="text.secondary" component="div">
            Type : <Chip color="info" label={item.user_type} size="small" />
        </Typography>
      </CardContent>
      {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
  );
};
