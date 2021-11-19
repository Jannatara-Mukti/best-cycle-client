import { Container, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';


const Products = () => {

    const[products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://mighty-coast-99068.herokuapp.com/allProduct')
        .then(res => res.json())
        .then(result => setProducts(result))
    }, []);
  
    
    return (
        <Container sx={{my: 5}}>
             <Typography variant="h5" sx={{color: '#286B6D', mb: 4, fontWeight:'bold'}}>
                See Our Bicycles 
            </Typography>
            <Box>
            
            <Grid container spacing={2} >
                {
                    products.map((product, index) => <Product
                        key={product._id}
                        product={product}
                    ></Product>
                )}

            </Grid>
          
            </Box>
        </Container>
    );
};

export default Products;