import { IconButton } from "@mui/material";
import { AppBarContainer, AppBarHeader } from "../../styles/appbar";
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Actions from "./actions";

export default function AppBarMobile({ matches, setOpenDrawer }){

    return (
        <AppBarContainer>
            <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <AppBarHeader textAlign={'center'} variant='h4'>
                My Stuff
            </AppBarHeader>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches}/>
        </AppBarContainer>
    )
}