import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import {Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const SingleNews = (props) => {

    const {name, image, description} = props.nw;

    const [read, setRead] = useState(description.slice(0, 15)+'....(click read more)');
    const handleReadNews = () =>{
        setRead(description);
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345, backgroundColor: '#286B6D' }}>
           <CardMedia
               component="img"
               alt="green iguana"
               height="140"
               image={image}
           />
           <CardContent>
               <Typography gutterBottom variant="h5" color="white" component="div">
                   {name}
               </Typography>
               <Typography variant="body2" color="white">
                   {read}
               </Typography>
           </CardContent>
           <CardActions sx={{p: 4}}>
               <Button onClick={handleReadNews} variant="contained" sx={{color:'#286B6D', backgroundColor:'white'}} size="small">Read More</Button>
               <Button variant="contained" sx={{color:'#286B6D', backgroundColor:'white'}} size="small">Share</Button>
           </CardActions>
           </Card>
     </Grid>
    );
};

export default SingleNews;