import { Box, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery, Button, Tooltip } from '@mui/material' 
import { Colors } from '../../styles/theme'
import CloseIcon from '@mui/icons-material/Close'
import { ProductDetailInfoWrapper, ProductDetailWrapper } from '../../styles/productDetail'
import { useTheme } from '@emotion/react'
import { Product, ProductImage } from '../../styles/products'
import IncDec from '../ui/index'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram' 
import FavoriteIcon from '@mui/icons-material/Favorite'
import useCart from '../../hooks/useCart'
import useWishList from '../../hooks/useWishList'
import { useState } from "react";
import { useUIContext } from '../../context/index'


function slideTransition(props) {
    return <Slide direction='down' {...props} />
}

export default function ProductDetail({open, onClose, product}) {
    const {wishList} = useUIContext()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const {addToCart, addToCartText} = useCart(product);

    const {addToWishList} = useWishList(product);
    const [favIsClicked, setFavIsClicked] = useState(0);

    const handleClick = () => {
        addToWishList();
        wishList.some(item => item.id === product.id) ? setFavIsClicked(0) : setFavIsClicked(1);
      } 

    const hover = {
        "&:hover": {
            cursor: 'pointer'
        }
    }

    return (
        <Dialog TransitionComponent={slideTransition} variant='permanat' open={open} fullScreen>
            <DialogTitle sx={{background: Colors.secondary}}>
                <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                    {product.name}
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
                    <Product sx={{ mr: 4}}>
                        <ProductImage src={product.image} />
                    </Product>
                    <ProductDetailInfoWrapper>
                        <Typography variant='subtitle1'>SKU 123</Typography>
                        <Typography variant='subtitle1'>Availability: 5 in Stock</Typography>
                        <Typography sx={{lineHeight: 2}} variant='h4'>
                            {product.name}
                        </Typography>
                        <Typography variant='body'>
                            {product.description}
                            {product.description}
                            {product.description}
                        </Typography>
                        <Box sx={{ marginTop: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <IncDec />
                            <Button onClick={addToCart} variant='contained'>{addToCartText}</Button>
                        </Box>
                        <Box display= 'flex' alignItems= 'center' sx={{ marginTop: 4, color: Colors.light}}>
                            <Tooltip placement="right" title="Add to Wishlist">
                                <FavoriteIcon onClick={() => (handleClick())} sx={{ marginRight: 2, "&:hover": {cursor: 'pointer'}}}/>
                            </Tooltip>
                        </Box>
                        <Box sx={{marginTop: 4, color: Colors.light}}>
                            <Tooltip placement="right" title="Share on Facebook">
                                <FacebookIcon sx={hover} />
                            </Tooltip>
                            <Tooltip placement="right" title="Share on Twitter">
                                <TwitterIcon sx={{ paddingLeft: theme.spacing(4), "&:hover": {cursor: 'pointer'}}}/>
                            </Tooltip>
                            <Tooltip placement="right" title="Share on Instagram">
                                <InstagramIcon sx={{ paddingLeft: theme.spacing(4), "&:hover": {cursor: 'pointer'}}}/>
                            </Tooltip>
                        </Box>
                    </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    )
}