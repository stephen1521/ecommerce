import styled from "@emotion/styled";
import { Box } from "@mui/system";


export const ProductDetailWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    padding: theme.spacing(4)
}))

export const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5,
}))