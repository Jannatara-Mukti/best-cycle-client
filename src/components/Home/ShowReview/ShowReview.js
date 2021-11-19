import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container, Grid, Rating, Typography } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';

const ShowReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://mighty-coast-99068.herokuapp.com/showreview')
        .then(res => res.json())
        .then( data=> setReviews(data))
    }, []);


    return (
        <Container>
            <Typography variant="h5" sx={{mt: 4, color: '#286B6D', fontWeight:'bold'}}>See Our Client Reviews</Typography>
            <Box sx={{mt: -3}}>
                <Grid container spacing={2}>
                   {
                       reviews.map(review => (
                        <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{py: 4, px: 2, height: 270}}>
                            <Typography variant="h6" gutterBottom component="div">
                                Client Name: {review?.userName}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom component="div">
                                Client Email: {review?.email}
                            </Typography>
                            <Typography sx={{color: '#286B6D', py: 1}} variant="caption" display="block" gutterBottom>
                                {review?.reviewDescription}
                            </Typography>
                            <Rating
                                name="simple-controlled"
                                value={review?.rating}
                               
                            />
                            <br />
                            <FacebookRoundedIcon sx={{ color: '#286B6D' }}/>
                            <EmailRoundedIcon sx={{ color: '#286B6D' }}/>
                            <PhoneAndroidRoundedIcon sx={{ color: '#286B6D' }}/>
                        </Paper>
                    </Grid>
                       ))
                   }
                </Grid>             
            </Box>
        </Container>
    );
};

export default ShowReview;