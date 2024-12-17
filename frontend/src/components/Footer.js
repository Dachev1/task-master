import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
    <Box
        sx={{
            textAlign: 'center',
            py: 2,
            backgroundColor: '#f4f4f4',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #ddd',
        }}
    >
        <Typography variant="body2" color="textSecondary">
            &copy; 2024 TaskMaster. All rights reserved.
        </Typography>
    </Box>
);

export default Footer;
