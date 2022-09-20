import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      sx={{
        gap: { sm: '80px', xs: '10px', lg: '40px' },
        mt: { sm: '32px', xs: '20px' },
        ml: { lg: '40px', xs: '0px' },
        justifyContent: 'none',
      }}
    >
      <Link to='/'>
        <img src={Logo} alt='Logo' style={{ width: '70px', height: '70px' }} />
      </Link>
      <Stack
        direction='row'
        sx={{ gap: { sm: '30px', xs: '20px', lg: '40px' } }}
        fontSize='24px'
        alignItems='center'
      >
        <Link
          className='nav-link'
          to='/'
          style={{
            textDecoration: 'none',
            color: '#3A1212',
          }}
        >
          Home
        </Link>
        <a
          className='nav-link'
          href='#about'
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          About
        </a>
        <a
          className='nav-link'
          href='#products'
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Products
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
