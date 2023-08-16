import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppBarContainer, AppBarHeader, MyList } from "../../styles/appbar";
import  SearchIcon from '@mui/icons-material/Search'
import Actions from "./actions";
import {useSelector, useDispatch} from 'react-redux'
import {authCheck, logout} from '../../redux/authSlice'
import {useEffect} from 'react'

export default function AppBarDesktop({ matches, setShowSearchBox, setShowLogin, setShowRegister, setShowProfile, setShowWishList }){
    const dispatch = useDispatch()
    const auth = useSelector( state => state.auth.isAuth )
    
    const handleScroll = () => {
        const products = document.getElementById('productsHeader');
        if(products) {
            products.scrollIntoView({behavior:'smooth'});
        }
    }

    useEffect( () => {
        dispatch(authCheck())
      }, [auth])

    const hover = {
        "&:hover": {
            cursor: 'pointer'
        }
    }

    return (
        <AppBarContainer>
            <AppBarHeader sx={hover} onClick={() => window.location.reload()}>Lorum Ipsoum</AppBarHeader>
            <MyList type='row'>
                <ListItemText primary= 'Home' sx={hover} onClick={() => window.location.reload()}/>
                <ListItemText primary= 'Products' sx={hover} onClick={() => {handleScroll()}}/>
                <ListItemText primary= 'Contact Us' sx={hover}/>
                { auth ? <ListItemText primary= 'Logout' sx={hover} onClick={() => dispatch(logout())}/>
                : <>
                <ListItemText primary= 'Login' sx={hover} onClick={() => setShowLogin(true)}/>
                <ListItemText primary= 'Register' sx={hover} onClick={() => setShowRegister(true)}/>
                </>}
                <ListItemButton onClick={() => setShowSearchBox(true)}>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches} setShowProfile={setShowProfile} setShowWishList={setShowWishList}/>
        </AppBarContainer>
    )
}