import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Container, Grid, Typography, TextField } from '@mui/material';
import { Box } from '@mui/system';
import bg from '../../imagesCycle/bg/bg5.jpg';
import useAuth from '../../hooks/useAuth';


const placeOrderBg = {
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundBlendMode: 'darken, luminosity',
    backgroundColor: 'rgba( 47, 58, 71, 0.8)'
}

const PlaceOrder = () => {

    const { productId } = useParams();
    const { user } = useAuth();
    const [ product, setProduct ] = useState({});
    const initialInfo = { userName: user.displayName, email: user.email, adress: '', phone: ''};
    const [order, setOrder] =useState(initialInfo);
    
    useEffect(()=>{
        fetch(`https://mighty-coast-99068.herokuapp.com/singleService/${productId}`)
        .then(res => res.json())
        .then( data=> setProduct(data))
    }, []);


    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = {...order};
        newOrder[field] = value;     
        setOrder(newOrder);
    }
    
    const handlePlaceOrder = e =>{
        e.preventDefault();
        const orderData = {
            ...order,
            name: product.name,
            price: product.price,
            image: product.image
        }
        orderData.status = "Pending";
        
        fetch('https://mighty-coast-99068.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert("Successfully added the user");
                
                }
            })
    }

    return (
        <Box>
            <Box style={placeOrderBg} sx={{ flexGrow: 1, height: '300px', py: 12, mb: 5}}>
                <Typography variant="h3" color="white" component="div">
                    Place Your Order Here
                </Typography>
            </Box>
            <Container style={{marginTop: '20px', marginBottom: '20px'}}>
                <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
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
                        <Typography variant="body2" color="text.secondary">
                        {product?.description}
                        </Typography>
                        <Typography variant="subtitle2" color="error.main" gutterBottom component="div">
                            Price {product?.price}$
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={7}>
                    <form onSubmit={handlePlaceOrder}>     
                            <TextField
                                disabled
                                sx={{width:'75%', m: 1}}
                                id="standard-basic"
                                value={product.name}
                                size="small" />
                            <TextField
                                 disabled
                                 sx={{width:'75%', m: 1}}
                                 id="standard-basic"
                                 value={product.price}
                                 size="small" />
                            <TextField
                                 disabled
                                 sx={{width:'75%', m: 1}}
                                 id="standard-basic"
                                 value={product.image}
                                 size="small" />
                            <TextField
                                sx={{width:'75%', m: 1}}
                                id="standard-basic"
                                name="userName"
                                defaultValue={user?.displayName}
                                onBlur={handleOnBlur}
                                size="small" />
                            <TextField
                                sx={{width:'75%', m: 1}}
                                id="standard-basic"
                                name="email"
                                defaultValue={user?.email}
                                onBlur={handleOnBlur}
                                size="small" />
                            <TextField
                                required
                                sx={{width:'75%', m: 1}}
                                id="standard-basic"
                                name="adress"
                                onChange={handleOnBlur}
                                label="Your Address" 
                                size="small" />
                            <TextField
                                required
                                sx={{width:'75%', m: 1}}
                                id="standard-basic"
                                name="phone"
                                onChange={handleOnBlur}
                                type="number"
                                label="Phone" 
                                size="small" />
                            <Button variant="contained" type="submit" sx={{width:'75%',backgroundColor: '#286B6D', m: 2, px: 3}}>Place Order</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>           
        </Box>
    );
};

export default PlaceOrder;