import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const ManageOrders = () => {

    const { user } = useAuth();
    const[orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect( ()=>{

        fetch('https://mighty-coast-99068.herokuapp.com/allOrders')
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

    const handleUpdate = (id) => {

        const status = "shipped";

        fetch(`https://mighty-coast-99068.herokuapp.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status})
        })
        .then(res => res.json())
        .then(data=> {
            if(data.modifiedCount > 0){
                alert("Status updated successfully");
                setControl(!control);
            }
        })
    }
  
    return (
        <Box sx={{flexGrow: 1, my: 8}}>
            
                <Typography variant="h3" color='#286B6D' component="div">
                    Manage Orders
                </Typography>
            
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
                            image={order?.image}
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
                           <Button onClick={()=>handleUpdate(order?._id)}  variant="contained" sx={{backgroundColor: '#286B6D', px: 2, mt: 3, fontSize: '11px', mr: 1}}>Update</Button>
                           <Button onClick={()=>handleDelete(order?._id)}  variant="contained" sx={{backgroundColor: 'error.main', px: 2, mt: 3, fontSize: '11px'}}>Delete</Button>
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

export default ManageOrders;