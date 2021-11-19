import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const GiveReview = () => {

    const { user } = useAuth();
    const initialInfo = { userName: user.displayName, email: user.email, reviewDescription: '', rating: ''};
    const [review, setReview] = useState(initialInfo);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);
    }

    const handleAddreview = e =>{
        e.preventDefault();
        fetch('https://mighty-coast-99068.herokuapp.com/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert("Review added successfully.");
                }
            })
    }
    return (
        <Box sx={{mt:12, mb: 8}}>
            <Typography variant="h5" gutterBottom>Give a Review Please</Typography>

            <form onSubmit={handleAddreview}>     

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
                    sx={{width:'75%', m: 1}}
                    id="standard-basic"
                    name="reviewDescription"
                    onBlur={handleOnBlur}
                    label="Write a Review Please" 
                    variant="outlined" />
                <TextField 
                    sx={{width:'75%', m: 1}}
                    id="standard-basic"
                    type="number"
                    name="rating"
                    onBlur={handleOnBlur}
                    label="Give a Rating between number 0 to 5"     
                    inputProps={{ inputMode: 'numeric', pattern: '[0-5]*' }} />
                
                <Button variant="contained" type="submit" sx={{width:'75%',backgroundColor: '#286B6D', m: 2, px: 3}}>Add review</Button>
        
            </form>
        </Box>
    );
};

export default GiveReview;