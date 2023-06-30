import { LoginBoxContainer } from '../../styles/login';
import CloseIcon from '@mui/icons-material/Close'
import { IconButton, Slide } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux'
import {authCheck, logout} from '../../redux/authSlice'
import {useEffect} from 'react'

export default function Wishlist({showWishList, setShowWishList}){
    const dispatch = useDispatch()
    const auth = useSelector( state => state.auth.isAuth )

    useEffect( () => {
        dispatch(authCheck())
      }, [auth])

    return (
        <Slide direction='down' in={showWishList} timeout={500}>
            <LoginBoxContainer>
                <IconButton onClick={() => setShowWishList(false)} sx={{position: 'absolute', top: 10, right: 10}}>
                        <CloseIcon sx={{fontSize: '4rem'}} color='secondary'/>
                </IconButton>
                {auth ? <h1>WishList</h1> : <h3>Please Create an Account or Login to view WishList</h3>}
            </LoginBoxContainer>
        </Slide> 
    )
}