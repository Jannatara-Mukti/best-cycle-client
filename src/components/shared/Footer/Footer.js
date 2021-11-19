import { Button, Container, Grid, IconButton, List, ListItemText, TextField, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

const useStyle = makeStyles({
    socialIcon: {
        color: '#fff !important',
        border: '1px solid #fff !important',
        margin: '10px 10px 10px 0 !important',
        '&:hover': {
            background: '#fff !important',
            color: '#2A5C5D !important'
        }
    },
    root: {
        color: '#D7DBDD'
    }
})

const Footer = () => {
    const { socialIcon, root } = useStyle();
    return (
        <footer style={{ backgroundColor: '#286B6D', color: '#fff'}}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <List sx={{textAlign:'left', ml:5}}>
                            <ListItemText>Contact Us</ListItemText>
                            <ListItemText className={root}>House#7, Road#4, Dhanmondi, Dhaka-1205</ListItemText>
                            <ListItemText className={root}>880 1624666000, +880 1624888444</ListItemText>
                            <ListItemText className={root}>Tooth Extraction</ListItemText>
                            <ListItemText className={root}>best_cycle@gmail.com</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <List sx={{textAlign:'left', ml: 5}}>
                            <ListItemText >Quick Links</ListItemText>
                            <ListItemText className={root}>About Us</ListItemText>
                            <ListItemText className={root}>Our Products</ListItemText>
                            <ListItemText className={root}>Explore More</ListItemText>
                            <ListItemText className={root}>See Reviews</ListItemText>
                            <ListItemText className={root}>Latest News</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <Box sx={{textAlign:'left', alignItems: 'center'}}>
                            <Typography>Newsletter</Typography>
                            <TextField
                                id="filled-size-small"
                                variant="filled"
                                size="small"
                                sx={{ backgroundColor:'white'}}
                            />
                            <Button sx={{my: 1, backgroundColor:'white', color: '#286B6D'}} variant="contained">Subscribe</Button>
                        </Box>
                    </Grid>
                </Grid>
                <hr />
                <Typography sx={{ textAlign: 'center'}} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
                <Box>
                    <IconButton className={socialIcon}>
                            <GoogleIcon />
                    </IconButton>
                    <IconButton className={socialIcon}>
                            <TwitterIcon />
                    </IconButton>
                    <IconButton className={socialIcon}>
                            <InstagramIcon />
                    </IconButton>
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;