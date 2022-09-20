import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box my='60px' bgcolor='#fff'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <Typography>© 2022 | Swayatt Drishtigochar</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
