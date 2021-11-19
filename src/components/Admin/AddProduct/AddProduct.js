import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

const AddProduct = () => {

    const [product, setProduct] = useState({});

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...product};
        newProduct[field] = value;
        setProduct(newProduct);
    }

    const handleAddProduct = e =>{
        
        e.preventDefault();
        fetch('https://mighty-coast-99068.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert("Successfully added the user");
                
                }
            })
    }
    return (
        <Box sx={{my: 12 }}>
            <Typography variant="h5" gutterBottom>Add a Product</Typography>
            <form onSubmit={handleAddProduct}>     
                <TextField
                    sx={{width:'75%', m: 1}}
                    id="standard-basic"
                    name="name"
                    onBlur={handleOnBlur}
                    label="Product Name" 
                    variant="outlined" />
                <TextField
                    sx={{width:'75%', m: 1}}
                    id="standard-basic"
                    name="image"
                    onBlur={handleOnBlur}
                    label="Product Image" 
                    variant="outlined" />
                <TextField
                    sx={{width:'75%', m: 1}}
                    id="standard-basic"
                    type="number"
                    name="price"
                    onBlur={handleOnBlur}
                    label="Product Price" 
                    variant="outlined" />
                <TextField
                    sx={{width:'75%', m: 1}}
                    id="standard-basic"
                    name="description"
                    onBlur={handleOnBlur}
                    label="Product Description" 
                    variant="outlined" />
                
                <Button variant="contained" type="submit" sx={{width:'75%',backgroundColor: '#286B6D', m: 2, px: 3}}>Add Product</Button>
            
                {/* {user?.email && <Alert severity="success">User Logged In succesfully.</Alert>}
                { authError && <Alert severity="error">{authError}</Alert>} */}
            </form>
        </Box>
    );
};

export default AddProduct;