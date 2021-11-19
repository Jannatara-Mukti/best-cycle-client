import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const hndleAdminSubmit = e =>{

        const user = { email };

        fetch('https://mighty-coast-99068.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
           if(data.modifiedCount > 0){
               alert("Admin added successfully.");
           }
        })

        e.preventDefault();
    }

    return (
        <Box sx={{flexGrow: 1, my: 12}}>
            <Typography variant="h3" color="#286B6D" sx={{mb: 8}} component="div">
               Make An Admin
            </Typography>
            <form onSubmit={hndleAdminSubmit}>
                <TextField 
                 SX={{width:"75%"}}
                 label="Email"
                 type="Email"
                 onBlur={handleOnBlur}
                 variant="standard" />
                <Button sx={{backgroundColor: '#286B6D'}} type="submit" variant="contained">Make Admin</Button>
            </form>
        </Box>

    );
};

export default MakeAdmin;