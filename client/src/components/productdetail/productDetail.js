import { Box, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery, Button } from '@mui/material' 
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


function slideTransition(props) {
    return <Slide direction='down' {...props} />
}

export default function ProductDetail({open, onClose, product}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const {addToCart, addToCartText} = useCart(product);

    return (
        <Dialog TransitionComponent={slideTransition} variant='permanat' open={open} fullScreen>
            <DialogTitle sx={{background: Colors.secondary}}>
                <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                    Product Title
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
                            <FavoriteIcon sx={{ marginRight: 2}}/>
                            Add to WishList
                        </Box>
                        <Box sx={{marginTop: 4, color: Colors.light}}>
                            <FacebookIcon />
                            <TwitterIcon sx={{ paddingLeft: theme.spacing(4)}}/>
                            <InstagramIcon sx={{ paddingLeft: theme.spacing(4)}}/>
                        </Box>
                    </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    )
}