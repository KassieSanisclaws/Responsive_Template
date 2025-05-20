import React from 'react';
import { Typography, Box } from '@mui/material';

export const Home: React.FC = () => (
  <Box>
    <Typography variant="h4" gutterBottom>
      Welcome to the Responsive App!
    </Typography>
    <Typography>
      Resize the window to see the layout adapt from mobile to desktop view.
    </Typography>
  </Box>
);