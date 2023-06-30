import { WishlistContainer } from '../../styles/wishList';
import CloseIcon from '@mui/icons-material/Close'
import { IconButton, Slide, Box, Typography, Paper, Button, Avatar, Divider, useMediaQuery, useTheme } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux'
import {authCheck, logout} from '../../redux/authSlice'
import {useEffect} from 'react'
import { Colors } from '../../styles/theme'
import { useUIContext } from '../../context/index'

export default function Wishlist({showWishList, setShowWishList}){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const {wishList, setWishList} = useUIContext();
    const dispatch = useDispatch()
    const auth = useSelector( state => state.auth.isAuth )
    useEffect( () => {
        dispatch(authCheck())
      }, [auth])

      const removeFromWishList = (item) => {
        wishList.findIndex(c => c.id === item.id) >= 0 
        ? setWishList(wishList.filter(c => c.id !== item.id)) 
        : setWishList(c => [...c, item]);
        
    }

      const wishListContent = wishList.map(item => (
        <Box key={item.id} display={'flex'} justifyContent='center' alignItems={'center'}>
        <Box>
            <Box display={'flex'} sx={{paddingTop: 2, paddingBottom: 2}} alignItems='start' justifyContent={'space-between'}>
                <Avatar src={item.image} sx={{width: 96, height:96, marginRight: 2}} />
                <Box display={'flex'} flexDirection={'column'}>
                    <Typography variant='h6'>{item.name}</Typography>
                    {!matches && <Typography variant='subtitle2'>{item.description}</Typography>}
                </Box>
                <Typography variant='body1' justifyContent={'end'}>${item.price}</Typography>
            </Box>
            {matches && <Typography variant='subtitle2'>{item.description}</Typography>}
            <Divider variant='inset' />
        </Box>
            <Box display={'flex'} justifyContent='center' alignItems={'center'} flexDirection='column' width={'20%'}>
                <Button onClick={() => removeFromWishList(item)}>Remove</Button>
            </Box>
        </Box>
    ))
    
    
    
      return (
        <Slide direction='down' in={showWishList} timeout={500}>
            <WishlistContainer>
                <IconButton onClick={() => setShowWishList(false)} sx={{position: 'absolute', top: 10, right: 10}}>
                        <CloseIcon sx={{fontSize: '4rem'}} color='secondary'/>
                </IconButton>
                {auth ? 
                    <Box sx={{padding: 4}} display='flex' justifyContent={'center'} flexDirection='column' alignItems={'center'}>
                    <Typography variant='h3' color={Colors.black}>Wishlist</Typography>
                    <Paper elevation={0} sx={{marginTop: 2, width: '90%', padding: 4}}>
                        {wishListContent}
                    </Paper>
                </Box> 
            : <h3>Please Create an Account or Login to view WishList</h3>}
            </WishlistContainer>
        </Slide> 
    )
}