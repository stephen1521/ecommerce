import { styled, Box } from "@mui/system";
import { Colors } from './theme';

export const WishlistContainer = styled(Box)(({theme}) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: Colors.white,
    zIndex: 99999,
}))