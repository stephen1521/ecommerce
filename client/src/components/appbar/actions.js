import { Badge, Divider, ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/appbar";
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context";

export default function Actions({matches, setShowProfile, setShowWishList}) {
    const { cart, setShowCart, wishList} = useUIContext();
    let Breaking = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop

    const handleScroll = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return (
        <Breaking>
            <MyList type='row'>
                <ListItemButton
                    sx={{
                        justifyContent:'center'
                    }}
                    onClick={() => setShowCart(true)}
                >
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary
                        }}
                    >
                        <Badge badgeContent={cart && cart.length} color='secondary'>
                            <ShoppingCartIcon />
                        </Badge>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton
                    sx={{
                        justifyContent:'center'
                    }}
                    onClick={() => {
                        handleScroll();
                        setShowWishList(true)}}
                >
                    <ListItemIcon 
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary
                        }}
                    >   
                        <Badge badgeContent={wishList && wishList.length} color="secondary">
                            <FavoriteIcon />
                        </Badge>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton
                    sx={{
                        justifyContent:'center'
                    }}
                    onClick={() => {
                        handleScroll();
                        setShowProfile(true)}}
                >
                    <ListItemIcon 
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary
                        }}
                    >
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
            </MyList>
        </Breaking>
    )
}