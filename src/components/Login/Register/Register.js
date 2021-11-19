import { Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import cycle from '../../../imagesCycle/random/r3.png';

const Register = () => {

    const {user, registerUser, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...loginData};
        newLogInData[field] = value;
        setLoginData(newLogInData);
    }

    const handleRegisterSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert("Your Password did not match.");
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
            <Box sx={{ flexGrow: 1, mt: 12, mb: 9}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h5" gutterBottom>Register</Typography>
                        
                        {!isLoading && <form onSubmit={handleRegisterSubmit}>
                                <TextField
                                    sx={{width:'75%', m: 1}}
                                    id="standard-basic"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    label="Your Name" 
                                    variant="standard" />
                                <TextField
                                    sx={{width:'75%', m: 1}}
                                    id="standard-basic"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    type="email"
                                    label="Your Email" 
                                    variant="standard" />
                                <TextField
                                    sx={{width:'75%', m: 1}}
                                    id="standard-basic"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    type="password"
                                    label="Password" 
                                    variant="standard" />
                                <TextField
                                    sx={{width:'75%', m: 1}}
                                    id="standard-basic"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    type="password"
                                    label="Re Enter Your Password" 
                                    variant="standard" />
                                <Button type="submit" variant="contained" sx={{width:'75%',backgroundColor: '#286B6D', m: 2, px: 3}}>Submit</Button>
                                <NavLink style={{textDecoration:'none'}} to="/login"><Button variant="text">Already Registered? Please Login.</Button></NavLink>
                            </form>}
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                            { authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <img sx={{my: 5}} style={{width: '100%', objectFit: 'cover'}} src={cycle} alt=""/>
                    </Grid>
                </Grid>
            </Box>
    );
};

export default Register;