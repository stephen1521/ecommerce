import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppBarDesktop from "./appbarDesktop";
import AppBarMobile from "./appbarMobile";

export default function Appbar({setOpenDrawer, setShowSearchBox, setShowLogin, setShowRegister, setShowProfile, setShowWishList}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      {matches ? <AppBarMobile matches={matches} setOpenDrawer={setOpenDrawer} setShowSearchBox={setShowSearchBox} setShowProfile={setShowProfile} setShowWishList={setShowWishList} /> : <AppBarDesktop matches={matches} setShowSearchBox={setShowSearchBox} setShowLogin={setShowLogin} setShowRegister={setShowRegister} setShowProfile={setShowProfile} setShowWishList={setShowWishList}/>}
    </>
  )
}