import React, { useState } from 'react'
import AppBar from './appbar/AppBar'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/system'
import Banner from './banner/banner'
import Promotions from './promotions/promotions'
import Products from './products/products'
import { Box, Typography } from '@mui/material'
import Footer from './Footer/footer'
import AppDrawer from './drawer/drawer'
import SearchBox from './search/search'

const Layout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
        <Container
          maxWidth='xl'
          sx={{
            background: '#fff'
          }}
        >
            <AppBar setOpenDrawer={setOpenDrawer} setShowSearchBox={setShowSearchBox}/>
            <Banner />
            <Promotions />
            <Box display={'flex'} justifyContent='center' sx={{ p:4 }}>
              <Typography variant='h4'>
                Our Products
              </Typography>
            </Box>
            <Products />
            <Footer />
            <AppDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
            <SearchBox showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox}/>
            <Outlet />
        </Container>    
  )
}

export default Layout