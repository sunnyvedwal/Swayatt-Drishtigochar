import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.gif';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '150px', xs: '70px' },
        mx: { lg: '40px', xs: '10px' },
      }}
      position='relative'
    >
      <Typography color='#ff2625' fontWeight='600' variant='h3'>
        Swayatt Drishtigochar
      </Typography>
      <Typography
        fontWeight='700'
        sx={{
          fontSize: { lg: '44px', xs: '40px' },
        }}
        mt='30px'
        mb='23px'
      >
        Automate
        <br /> and Relax
      </Typography>
      <Typography fontSize='22px' LineHeight='35px' mb='4px'>
        Check out our products and pricing
      </Typography>
      <Button
        variant='contained'
        sx={{ backgroundColor: '#ff2625', padding: '10px' }}
      >
        Explore
      </Button>
      <Typography
        fontWeight='600'
        color='#ff2625'
        sx={{
          opacity: '0.1',
          display: { lg: 'block', xs: 'none' },
        }}
        fontSize='200px'
      >
        AUTOMATION
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
