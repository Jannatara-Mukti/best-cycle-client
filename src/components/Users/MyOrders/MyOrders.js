import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import bg from '../../../imagesCycle/bg/bg2.jpg';

const exploreBg = {
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundBlendMode: 'darken, luminosity',
    backgroundColor: 'rgba( 47, 58, 71, 0.9)'
}

const MyOrders = () => {

    const { user } = useAuth();
    const[orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect( ()=>{

        const url = `https://mighty-coast-99068.herokuapp.com/myOrder?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(result => setOrders(result))
    }, [control]);

    const handleDelete = (id) =>{

        const proceed = window.confirm("Are You sure, you want to delete?");

        if(proceed){

        fetch(`https://mighty-coast-99068.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE'
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.deletedCount > 0){
                    alert("The order has been successfully deleted.");
                    setControl(!control);
                }
            })
        }
    }
  
    return (
        <Box sx={{flexGrow: 1, my: 8}}>
            <Box style={exploreBg} sx={{ flexGrow: 1, height: '300px', py: 12, mb: 5}}>
                <Typography variant="h3" color="white" component="div">
                    My Orders
                </Typography>
            </Box>
            <Container>
            <Grid container spacing={2} >
            {
                orders.map((order, index) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={order.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {order?.name}
                            </Typography>
                            <Typography variant="subtitle2" color="error.main" gutterBottom component="div">
                                Price {order?.price}$
                            </Typography>
                            <hr />
                            <Typography variant="body2" color="text.secondary">
                                Client: {order?.userName}
                            </Typography>
                            <Typography variant="caption" color="text.success">
                                Status: {order?.status}
                            </Typography>
                            <br />
                           <Button onClick={()=>handleDelete(order?._id)}  variant="contained" sx={{backgroundColor: '#286B6D', m: 2, px: 3}}>Delete</Button>
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

export default MyOrders;