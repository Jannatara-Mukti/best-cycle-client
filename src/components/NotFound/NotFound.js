import { Box } from '@mui/system';
import React from 'react';
import img from '../../imagesCycle/random/r6.jpg';

const NotFound = () => {
    return (
        <Box>
            <img src={img} style={{width: '100%'}} alt="" />
        </Box>
    );
};

export default NotFound;