import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../imagesCycle/bg/bg2.jpg'

const exploreBg = {
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundBlendMode: 'darken, luminosity',
    backgroundColor: 'rgba( 47, 58, 71, 0.9)'
}

const Explore = () => {

    const[products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://mighty-coast-99068.herokuapp.com/explore')
        .then(res => res.json())
        .then(result => setProducts(result))
    }, []);
  
    return (
        <Box sx={{flexGrow: 1, mt: 4, mb: 8}}>
            <Box style={exploreBg} sx={{ flexGrow: 1, height: '300px', py: 12, mb: 5}}>
                <Typography variant="h3" color="white" component="div">
                    See All Our stocks
                </Typography>
            </Box>
            <Container>
            <Grid container spacing={2} >
            {
                products.map((product, index) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={product.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Typography variant="subtitle2" color="error.main" gutterBottom component="div">
                                Price {product.price}$
                            </Typography>
                            <Link  style={{textDecoration:'none'}} to={`/placeOrder/${product._id}`}><Button variant="contained">Purchase</Button></Link>
                        </CardContent>
                        </Card>
            </Grid>
                    )
                )}

            </Grid>
            </Container>
        </Box>
    );
};

export default Explore;