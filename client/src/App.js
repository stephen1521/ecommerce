import './styles/App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { UIProvider } from './context';
import Banner from './components/banner/banner';
import Promotions from './components/promotions/promotions';
import Products from './components/products/products';
import Footer from './components/Footer/footer';
import AppDrawer from './components/drawer/drawer';
import Cart from './components/cart/cart';
import SearchBox from './components/search/search';
import Profile from './components/profile/profile';
import Wishlist from './components/wishlist/wishlist';
import AppBar from './components/appbar/AppBar'
import {useState, } from 'react'
import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'

function App() {
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
                <Typography variant='h4' id="productsHeader">
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
        </Container>    
  );
}

export default App;