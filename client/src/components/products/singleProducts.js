import { Stack, Tooltip } from '@mui/material'
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../styles/products'
import ProductMeta from './ProductMeta'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import useDialogModel from '../../hooks/useDialogModel'
import ProductDetail from '../productdetail/productDetail'
import useCart from '../../hooks/useCart'
import useWishList from '../../hooks/useWishList'
import { useState } from 'react'
import { useUIContext } from '../../context/index'

export default function SingleProducts({product, matches}) {
    const {wishList} = useUIContext()
    const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModel(ProductDetail);
    const {addToCart, addToCartText} = useCart(product);
    const {addToWishList} = useWishList(product);
    const [favIsClicked, setFavIsClicked] = useState(0);
    // console.log(addToCartText);

    const handleClick = () => {
        addToWishList();
        wishList.some(item => item.id === product.id) ? setFavIsClicked(0) : setFavIsClicked(1);
    } 

    return (
        <>
            <Product>
                <ProductImage src={product.image}/>
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction={'row'}>
                        <ProductFavButton isFav={favIsClicked} onClick={handleClick}>
                            <Tooltip placement="left" title="Add To Wishlist">
                                <FavoriteIcon />
                            </Tooltip>
                        </ProductFavButton>
                        <ProductActionButton>
                            <Tooltip placement="left" title="Share This Product">
                                <ShareIcon color='primary' />
                            </Tooltip>
                        </ProductActionButton>
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <Tooltip placement="left" title="Full View Product">
                                <FitScreenIcon color='primary' />
                            </Tooltip>
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductAddToCart onClick={addToCart} variant='contained'>
                {addToCartText}
            </ProductAddToCart>
            <ProductDetailDialog product={product} />
        </>
    )
}