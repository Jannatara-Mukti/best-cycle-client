import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import cycle from '../../../imagesCycle/products/p12.png';
import bg from '../../../imagesCycle/bg/bg3.jpg';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const BannerBg = {
    background: `url(${bg})`,
    backgroundPosition: 'bottom',
    backgroundBlendMode: 'darken, luminosity',
    backgroundColor: 'rgba( 47, 58, 71, 0.9)'
}

const Banner = () => {
    return (
        <Box style={BannerBg} sx={{ flexGrow: 1}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Box sx={{my: 5, mx: 4}}>
                    <Typography variant="h5" style={{color: '#fff', fontWeight:'bold'}}>
                        Get Your First Cycle
                    </Typography>
                    <Typography variant="body2" sx={{my: 4,  color:"#BFC9CA"}}>
                        Do You Know Best_Cycle? Well, We are the best Bicycle Providing Company in the market who choose the customer comfort first.
                    </Typography>
                   <Link style={{textDecoration:'none'}} to="/explore"> <Button variant="contained" style={{backgroundColor: '#286B6D'}}>Explore More</Button></Link>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} >
                <img src={cycle} sx={{width:'100%'}} alt=""/>
            </Grid>
        </Grid>
    </Box>
    );
};

export default Banner;