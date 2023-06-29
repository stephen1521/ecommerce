import { Stack } from '@mui/system'
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../styles/products'
import ProductMeta from './ProductMeta'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import useDialogModel from '../../hooks/useDialogModel'
import ProductDetail from '../productdetail/productDetail'

export default function SingleProducts({product, matches}) {
    const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModel(ProductDetail);
    
    return (
        <>
            <Product>
                <ProductImage src={product.image}/>
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction={'row'}>
                        <ProductFavButton isFav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color='primary' />
                        </ProductActionButton>
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <FitScreenIcon color='primary' />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductAddToCart variant='contained'>
                Add to Cart
            </ProductAddToCart>
            <ProductDetailDialog product={product} />
        </>
    )
}