import { Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import cycle from '../../../imagesCycle/random/r3.png';


// const LoginBg = {
//     background: `url(${bg})`,
//     backgroundPosition: 'bottom',
//     backgroundBlendMode: 'darken, luminosity',
//     backgroundColor: 'rgba( 47, 58, 71, 0.9)'
// }

const Login = () => {

    const [loginData, setLoginData] = useState({});

    const {user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...loginData};
        newLogInData[field] = value;
        // console.log(newLogInData);
        setLoginData(newLogInData);
    }

    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, history);
    }

    return (
            <Box sx={{ flexGrow: 1, mt: 10, mb: 6 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                       <Box>
                       <Typography variant="h5" gutterBottom>Login</Typography>
                        <form onSubmit={handleLoginSubmit}>     
                            <TextField
                                sx={{width:'75%', m: 1}}
                                id="standard-basic"
                                name="email"
                                onChange={handleOnChange}
                                type="email"
                                label="Your Email" 
                                variant="standard" />
                            <TextField
                                sx={{width:'75%', m: 1}}
                                id="standard-basic"
                                name="password"
                                onChange={handleOnChange}
                                type="password"
                                label="Password" 
                                variant="standard" />
                            <Button variant="contained" type="submit" sx={{width:'75%',backgroundColor: '#286B6D', m: 2, px: 3}}>Submit</Button>
                            <NavLink style={{textDecoration:'none'}} to="/register"><Button variant="text">New User? Please Register.</Button></NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">User Logged In succesfully.</Alert>}
                            { authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <p>--------------------------------</p>
                        <Button onClick={handleGoogleSignIn} variant="contained" sx={{width:'75%',backgroundColor: '#286B6D', m: 2, px: 3}}>Google Sign In</Button>
                       </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <img style={{width: '100%', objectFit: 'cover'}} src={cycle} alt=""/>
                    </Grid>
                </Grid>
            </Box>
    );
};

export default Login;