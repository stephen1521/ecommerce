import { Stack } from '@mui/system'
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../styles/products'
import ProductMeta from './ProductMeta'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'

export default function SingleProducts({product, matches}) {
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
                        <ProductActionButton>
                            <FitScreenIcon color='primary' />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductAddToCart variant='contained'>
                Add to Cart
            </ProductAddToCart>
        </>
    )
}