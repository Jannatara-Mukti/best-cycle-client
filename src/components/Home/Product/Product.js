import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const { _id, name, description, image, price } = props.product;

    return (
        <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 450 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="subtitle2" color="error.main" gutterBottom component="div">
                            Price {price}$
                        </Typography>
                        <Link  style={{textDecoration:'none'}} to={`/placeOrder/${_id}`}><Button variant="contained" style={{backgroundColor: '#286B6D'}}>Purchase</Button></Link>
                    </CardContent>
                    </Card>
                </Grid>
    );
};

export default Product;