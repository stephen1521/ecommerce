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
import Cart from './cart/cart'
import { UIProvider } from '../context'
import Login from './Login'
import Register from './Register'
import Profile from './profile/profile'
import Wishlist from './wishlist/wishlist'

const Layout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showWishList, setShowWishList] = useState(false);

  return (
        <Container
          maxWidth='xl'
          sx={{
            background: '#fff'
          }}
        >
            <UIProvider>
              <AppBar setOpenDrawer={setOpenDrawer} setShowSearchBox={setShowSearchBox} setShowLogin={setShowLogin} setShowRegister={setShowRegister} setShowProfile={setShowProfile} setShowWishList={setShowWishList}/>
              <Banner />
              <Promotions />
              <Box display={'flex'} justifyContent='center' sx={{ p:4 }}>
                <Typography variant='h4'>
                  Our Products
                </Typography>
              </Box>
              <Products />
              <Footer />
              <AppDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
              <Cart />
              <SearchBox showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox}/>
              <Login showLogin={showLogin} setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>
              <Register showRegister={showRegister} setShowRegister={setShowRegister} setShowLogin={setShowLogin}/>
              <Profile showProfile={showProfile} setShowProfile={setShowProfile}/>
              <Wishlist showWishList={showWishList} setShowWishList={setShowWishList}/>
            </UIProvider>
            <Outlet />
        </Container>    
  )
}

export default Layout