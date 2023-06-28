import { Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { DrawerCloseButton } from '../../styles/appbar'
import { Colors } from '../../styles/theme'
import {lighten} from 'polished'

export default function AppDrawer({openDrawer, setOpenDrawer}) {
    
    return (
        <>
            { openDrawer && (<DrawerCloseButton onClick={() => setOpenDrawer(false)}>
                <CloseIcon sx={{fontSize: '2.5rem', color: lighten( 0.09, Colors.secondary)}}/>
            </DrawerCloseButton> )}
            <Drawer open={openDrawer}>
                <List>
                    <ListItemButton>
                        <ListItemText>Home</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle'/>
                    <ListItemButton>
                        <ListItemText>Categories</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle'/>
                    <ListItemButton>
                        <ListItemText>Products</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle'/>
                    <ListItemButton>
                        <ListItemText>About Us</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle'/>
                    <ListItemButton>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle'/>
                    <ListItemButton>
                        <ListItemText onClick={() => setOpenDrawer(false)}>Close</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle'/>
                </List>
            </Drawer>
        </>
    )
}