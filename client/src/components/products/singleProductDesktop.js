import { Stack, Tooltip } from '@mui/material'
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../styles/products'
import ProductMeta from './ProductMeta'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import { useState } from "react";
import useDialogModel from '../../hooks/useDialogModel'
import ProductDetail from '../productdetail/productDetail'
import useCart from '../../hooks/useCart'
import useWishList from '../../hooks/useWishList'
import { useUIContext } from '../../context/index'

export default function SingleProductDesktop({ product, matches }) {
    const {wishList} = useUIContext()
    const [showOptions, setShowOptions] = useState(false);
    const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModel(ProductDetail);
  
    const {addToCart, addToCartText} = useCart(product);
    const {addToWishList} = useWishList(product);
    const [favIsClicked, setFavIsClicked] = useState(0);
  
    const handleMouseEnter = () => {
      setShowOptions(true);
    }
    const handleMouseLeave = () => {
      setShowOptions(false);
    }

    const handleClick = () => {
      addToWishList();
      wishList.some(item => item.id === product.id) ? setFavIsClicked(0) : setFavIsClicked(1);
    } 

    return (
      <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ProductImage src={product.image} />
          <ProductFavButton isFav={favIsClicked} onClick={handleClick}>
            <FavoriteIcon />
          </ProductFavButton>
          {showOptions && (
            <ProductAddToCart onClick={addToCart} show={showOptions} variant="contained">
              {addToCartText}
            </ProductAddToCart>
          )}
          <ProductActionsWrapper show={showOptions}>
            <Stack direction='column'>
              <ProductActionButton>
                <Tooltip placement="left" title="share this product">
                  <ShareIcon color="primary" />
                </Tooltip>
              </ProductActionButton>
              <ProductActionButton onClick={() => showProductDetailDialog()}>
                <Tooltip placement="left" title="Full view">
                  <FitScreenIcon color="primary" />
                </Tooltip>
              </ProductActionButton>
            </Stack>
          </ProductActionsWrapper>
        </Product>
        <ProductMeta product={product} matches={matches}/>
        <ProductDetailDialog product={product} />
      </>
    );
  }