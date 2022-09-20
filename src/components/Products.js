import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ProductCard from './ProductCard';

const Products = () => {
  const products = ['camera1', 'camera2', 'camera3'];
  return (
    <Box
      id='products'
      sx={{
        mt: { lg: '30px' },
      }}
      mt='50px'
      p='20px'
    >
      <Typography
        variant='h5'
        textAlign='center'
        fontWeight={700}
        color='#ff2625'
        sx={{ fontSize: { xs: '20px', lg: '20px' } }}
      >
        PRODUCTS
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '110px', xs: '50px' }, mt: { lg: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {products.map((product, index) => (
          <ProductCard />
        ))}
      </Stack>
    </Box>
  );
};

export default Products;
