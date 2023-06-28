import React from 'react'
import AppBar from './appbar/AppBar'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/system'
import Banner from './banner/banner'
import Promotions from './promotions/promotions'
import Products from './products/products'
import { Box, Typography } from '@mui/material'

const Layout = () => {
  return (
        <Container
          maxWidth='xl'
          sx={{
            background: '#fff'
          }}
        >
            <AppBar />
            <Banner />
            <Promotions />
            <Box display={'flex'} justifyContent='center' sx={{ p:4 }}>
              <Typography variant='h4'>
                Our Products
              </Typography>
            </Box>
            <Products />
            <Outlet />
        </Container>    
  )
}

export default Layout