import { Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { DrawerCloseButton } from '../../styles/appbar'
import { Colors } from '../../styles/theme'
import {lighten} from 'polished'
import {useSelector, useDispatch} from 'react-redux'
import {authCheck, logout} from '../../redux/authSlice'
import {useEffect} from 'react'

export default function AppDrawer({openDrawer, setOpenDrawer, setShowLogin, setShowRegister}) {
    const dispatch = useDispatch()
    const auth = useSelector( state => state.auth.isAuth )

    const handleScroll = () => {
        const products = document.getElementById('productsHeader');
        if(products) {
            setOpenDrawer(false);
            products.scrollIntoView({behavior:'smooth'});
        }
    }
    
    useEffect( () => {
        dispatch(authCheck())
      }, [auth])

    return (
        <>
            { openDrawer && (<DrawerCloseButton onClick={() => setOpenDrawer(false)}>
                <CloseIcon sx={{fontSize: '2.5rem', color: lighten( 0.09, Colors.secondary)}}/>
            </DrawerCloseButton> )}
            <Drawer open={openDrawer}>
                <List>
                    <ListItemButton>
                        <ListItemText primaryTypographyProps={{ color: Colors.white}} onClick={() => {window.location.reload()}}>Home</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle'/>
                    <ListItemButton>
                        <ListItemText primaryTypographyProps={{ color: Colors.white}} onClick={() => {handleScroll()}}>Products</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle'/>
                    <ListItemButton>
                        <ListItemText primaryTypographyProps={{ color: Colors.white}}>About Us</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle'/>
                    <ListItemButton>
                        <ListItemText primaryTypographyProps={{ color: Colors.white}}>Contact Us</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle'/>
                    { auth ? <> 
                    <ListItemButton onClick={() => dispatch(logout())} >
                        <ListItemText primaryTypographyProps={{ color: Colors.white}}>Logout</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle'/>
                    </> 
                    : <> <ListItemButton>
                        <ListItemText onClick={() => {
                            setShowLogin(true) 
                            setOpenDrawer(false)}} primaryTypographyProps={{ color: Colors.white}}>Login</ListItemText >
                    </ListItemButton>
                    <Divider variant='middle'/>
                    <ListItemButton>
                        <ListItemText onClick={() => {
                            setShowRegister(true) 
                            setOpenDrawer(false)}} primaryTypographyProps={{ color: Colors.white}}>Register</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle'/>
                    </>}
                    <ListItemButton>
                        <ListItemText onClick={() => setOpenDrawer(false)} primaryTypographyProps={{ color: Colors.white}}>Close</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle'/>
                </List>
            </Drawer>
        </>
    )
}