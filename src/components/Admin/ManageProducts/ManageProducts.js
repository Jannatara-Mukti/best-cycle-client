import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const ManageProducts = () => {

    const { user } = useAuth();
    const[products, setProducts] = useState([]);
    const [control, setControl] = useState(false);

    useEffect( ()=>{

        fetch('https://mighty-coast-99068.herokuapp.com/explore')
        .then(res => res.json())
        .then(result => setProducts(result))
    }, [control]);

    const handleDelete = (id) =>{

        const proceed = window.confirm("Are You sure, you want to delete?");

        if(proceed){

        fetch(`https://mighty-coast-99068.herokuapp.com/deleteproduct/${id}`, {
            method: 'DELETE'
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.deletedCount > 0){
                    alert("The product has been successfully deleted.");
                    setControl(!control);
                }
            })
        }
    }
  
    return (
        <Box sx={{flexGrow: 1, my: 8}}>
            
                <Typography variant="h3" color='#286B6D' component="div">
                    Manage Products
                </Typography>
            
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
                            image={product?.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product?.name}
                            </Typography>
                            <Typography variant="subtitle2" color="error.main" gutterBottom component="div">
                                Price {product?.price}$
                            </Typography>
                            <hr />
                            <Typography variant="body2" color="text.secondary">
                                Client: {product?.description}
                            </Typography>
                           <Button onClick={()=>handleDelete(product?._id)}  variant="contained" sx={{backgroundColor: 'error.main', m: 2, px: 3}}>Delete</Button>
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

export default ManageProducts;