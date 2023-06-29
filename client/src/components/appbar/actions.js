import { Badge, Divider, ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/appbar";
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context";

export default function Actions({matches, setShowProfile, setShowWishList}) {
    const { cart, setShowCart} = useUIContext();
    let Breaking = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop
    return (
        <Breaking>
            <MyList type='row'>
                <ListItemButton
                    sx={{
                        justifyContent:'center'
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary
                        }}
                    >
                        <Badge badgeContent={cart && cart.length} color='secondary'>
                            <ShoppingCartIcon onClick={() => setShowCart(true)}/>
                        </Badge>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton
                    sx={{
                        justifyContent:'center'
                    }}
                >
                    <ListItemIcon onClick={() => setShowWishList(true)}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary
                        }}
                    >
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton
                    sx={{
                        justifyContent:'center'
                    }}
                >
                    <ListItemIcon onClick={() => setShowProfile(true)}
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