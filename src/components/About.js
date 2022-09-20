import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const About = () => {
  return (
    <Box
      id='about'
      mt={{ sm: '50px', xs: '50px', lg: '30px' }}
      sx={{ backgroundColor: '#D3D8D0' }}
      p='10px'
    >
      <Typography
        variant='h5'
        textAlign='center'
        fontWeight={700}
        color='#ff2625'
        sx={{ fontSize: { xs: '20px', lg: '20px' } }}
      >
        About Us
      </Typography>
      <Typography
        textAlign='center'
        mt='20px'
        fontWeight={600}
        sx={{ fontSize: { xs: '20px', lg: '35px' } }}
        textTransform='capitalize'
      >
        We are on a mission to{' '}
        <span style={{ color: '#ff2625' }}> automate </span> <br /> all the
        industries in our country.
      </Typography>
      <Typography textAlign='center' sx={{ mt: { sm: '20px', lg: '10px' } }}>
        Our mission is to empower the industries with automation and <br />
        reducing human error making production more efficient.
      </Typography>
    </Box>
  );
};

export default About;
