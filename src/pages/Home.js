import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import About from '../components/About';
import Products from '../components/Products';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <About />
      <Products />
    </Box>
  );
};

export default Home;
