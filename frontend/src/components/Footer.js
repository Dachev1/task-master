import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
    <Box
        sx={{
            textAlign: 'center',
            py: 2,
            backgroundColor: '#6c63ff',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #ddd',
        }}
    >
        <Typography variant="body2" color="#fff">
            &copy; 2024 TaskMaster. All rights reserved.
        </Typography>
    </Box>
);

export default Footer;
