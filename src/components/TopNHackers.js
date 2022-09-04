import * as React from 'react';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHackers } from '../hooks/useHackers';

export default function TopNHackers() {


  const {
    data: topHackersApiResponse,
    loading: topHackersApiLoading,
    error: topHackersApiError,
    trigger: topHackersApiTrigger,
  } = useHackers();

  useEffect(()=>{
    topHackersApiTrigger(true, 4)
  },[])

  useEffect(()=>{
    if(topHackersApiResponse)
      console.log('topHackersApiResponse', topHackersApiResponse)
  }, [topHackersApiResponse])

  if (!topHackersApiResponse)
    return <p>Loading...top...hackers...</p>
  return (
    topHackersApiResponse.users.map((item)=>{

      return <Card sx={{ maxWidth: 345 }} key={item.id}>
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
        <Typography variant="body2" color="text.secondary">
          Rank : {item.overall_rank},  User Name : {item.user_name}
          User Type : {item.user_type}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

    })

  );
}
