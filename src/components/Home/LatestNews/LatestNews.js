import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import img1 from '../../../imagesCycle/random/n1.jpg';
import img2 from '../../../imagesCycle/random/n2.jpg';
import img3 from '../../../imagesCycle/random/n3.jpg';
import SingleNews from '../SingleNews/SingleNews';



const news = [
    {
        name: "Many Types of Bikes",
        description: "We can fit you with the perfect bike because we carry all sizes and types of bikes. You will love our bike, we can assure you. So, Come and Buy Now.",
        image: img1
    },
    {
        name: "Long Opening Hours",
        description: "Have all the time in the world? Rent for an entire day and explore New York City at your leisure. So, What are you wairing for? Come and Buy Now.",
        image: img2
    },
    {
        name: "Best Bikes in Town",
        description: "Comfort. Safety. Our equipment is guaranteed to make your biking experience 100% stress-free and enjoyable. Your safety is the first priority for us. ",
        image: img3
    }
]


const LatestNews = () => {

    return (
        <Box sx={{ flexGrow: 1, mt: 5, mb: 8 }}>
            <Container>
                <Typography variant="h5" sx={{color: '#286B6D', fontWeight:'bold'}} component="div">
                       Latest News
                </Typography>
                <Typography sx={{fontWeight: 500, m: 3}} gutterBottom variant="h6" component="div">
                       Read the Latest News and Know about Best_Cycle
                </Typography>
                <Grid container spacing={2}>
                    {
                        news.map((nw, index) => <SingleNews
                            key={nw.name}
                            nw={nw}
                        ></SingleNews>
                    )}
                </Grid>
            </Container>
        </Box>
    );
};

export default LatestNews;