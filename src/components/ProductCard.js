import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Img from '../assets/images/banner.gif';

const ProductCard = ({ product }) => {
  return (
    <Box className='product-card'>
      <img src={Img} alt='product' Loading='lazy' />
      <Stack direction='row'>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#ffa9a9',
            fontSize: '14px',
            borderRadius: '40px',
            textTransform: 'capitalize',
          }}
        >
          Camera
        </Button>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#fcc757',
            fontSize: '14px',
            borderRadius: '40px',
            textTransform: 'capitalize',
          }}
        >
          3d
        </Button>
      </Stack>
      <Typography
        ml='21px'
        color='#000'
        fontWeight='bold'
        fontSize='22px'
        mt='11px'
        pb='10px'
        textTransform='capitalize'
      >
        module
      </Typography>
    </Box>
  );
};

export default ProductCard;
