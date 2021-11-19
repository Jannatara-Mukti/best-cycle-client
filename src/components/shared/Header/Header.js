import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { user, admin, logOut } = useAuth();


    return (
        <Box  sx={{ flexGrow: 1}}>
        <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{mr: 'auto' }}>
                Best_Cycle
            </Typography>
            
               <NavLink style={{textDecoration:'none', color:'white'}} to="/home"><Button color="inherit" sx={{fontSize:'12px'}}>Home</Button></NavLink>

                {
                   ( admin && user?.email ) &&  <Box>
                        <NavLink style={{textDecoration:'none', color:'white'}} to="/addProduct"><Button sx={{fontSize:'12px'}} color="inherit">Add A Product</Button></NavLink>

                        <NavLink style={{textDecoration:'none', color:'white'}} to="/makeAdmin"><Button sx={{fontSize:'12px'}} color="inherit">Make Admin</Button></NavLink>

                        <NavLink style={{textDecoration:'none', color:'white'}} to='/manageProducts'> <Button sx={{fontSize:'12px'}} color="inherit">Manage Products</Button></NavLink>

                        <NavLink style={{textDecoration:'none', color:'white'}} to='/manageOrders'> <Button sx={{fontSize:'12px'}} color="inherit">Manage Orders</Button></NavLink>

                        <Button sx={{fontSize:'12px'}} onClick={logOut} style={{color:'white'}}>Log Out</Button>
                    </Box>
                    
                }
               
                {
                   (!admin && user?.email ) && <Box>
                        <NavLink style={{textDecoration:'none', color:'white'}} to="/pay"><Button sx={{fontSize:'12px'}} color="inherit">Pay</Button></NavLink>

                        <NavLink style={{textDecoration:'none', color:'white'}} to="/givereview"><Button sx={{fontSize:'12px'}} color="inherit">Review</Button></NavLink>

                        <NavLink style={{textDecoration:'none', color:'white'}} to='/myOrders'> <Button sx={{fontSize:'12px'}} color="inherit">My Orders</Button></NavLink>


                        <Button sx={{fontSize:'12px'}} onClick={logOut} style={{color:'white'}}>Log Out</Button>
                    </Box>
                     
                }

                {
                    (!admin && !user?.email ) &&  <NavLink style={{textDecoration:'none', color:'white'}} to='/login'> <Button sx={{fontSize:'12px'}} color="inherit">Login</Button></NavLink>
                }

                { user?.email && <Typography sx={{fontSize:'9px'}} variant="caption">User: {user?.displayName}</Typography>}

           </Toolbar> 
        </AppBar>
        </Box>
    );
};

export default Header;