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
    useEffect( () => {
        dispatch(authCheck())
      }, [auth])

    return (
        <AppBarContainer>
            <AppBarHeader>My Stuff</AppBarHeader>
            <MyList type='row'>
                <ListItemText primary= 'Home'/>
                <ListItemText primary= 'Products'/>
                <ListItemText primary= 'Contact Us'/>
                { auth ? <ListItemText primary= 'Logout' onClick={() => dispatch(logout())}/>
                : <>
                <ListItemText primary= 'Login' onClick={() => setShowLogin(true)}/>
                <ListItemText primary= 'Register' onClick={() => setShowRegister(true)}/>
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