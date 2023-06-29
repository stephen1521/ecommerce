import { Avatar, Box, Button, Divider, Drawer, Paper, Typography, useMediaQuery, useTheme, IconButton } from '@mui/material'
import { Colors } from '../../styles/theme'
import { useUIContext } from '../../context/index'
import IncDec from '../ui/incDecCart'

export default function Cart() {

    const {cart, setCart, setShowCart, showCart} = useUIContext();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const removeFromCart = (item) => {
        cart.findIndex(c => c.id === item.id) >= 0 
        ? setCart(cart.filter(c => c.id !== item.id)) 
        : setCart(c => [...c, item]);
        
    }
    
    // console.log(cart);
    const cartContent = cart.map(item => (
        <Box key={item.id} display={'flex'} justifyContent='center' alignItems={'center'}>
        <Box>
            <Box display={'flex'} sx={{paddingTop: 2, paddingBottom: 2}} alignItems='start' justifyContent={'space-between'}>
                <Avatar src={item.image} sx={{width: 96, height:96, marginRight: 2}} />
                <Box display={'flex'} flexDirection={'column'}>
                    <Typography variant='h6'>{item.name}</Typography>
                    {!matches && <Typography variant='subtitle2'>{item.description}</Typography>}
                </Box>
                <Typography variant='body1' justifyContent={'end'}>${item.price}</Typography>
            </Box>
            {matches && <Typography variant='subtitle2'>{item.description}</Typography>}
            <Divider variant='inset' />
        </Box>
            <Box display={'flex'} justifyContent='center' alignItems={'center'} flexDirection='column' width={'20%'}>
                <Typography>Quantity</Typography>
                <IncDec />
                <Button onClick={() => removeFromCart(item)}>Remove</Button>
            </Box>
        </Box>
    ))
    // console.log(cartContent);

    return (
        <Drawer open={showCart} onClose={() => setShowCart(false)} anchor='right' PaperProps={{sx:{width: matches ? '100%' : 500, background: Colors.light_grey, borderRadius: 0 }}}>
            {cart.length > 0 ? <Box sx={{padding: 4}} display='flex' justifyContent={'center'} flexDirection='column' alignItems={'center'}>
                <Typography variant='h3' color={Colors.black}>Your Cart</Typography>
                <Typography variant='body1' color={Colors.muted}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                <Paper elevation={0} sx={{marginTop: 2, width: '90%', padding: 4}}>
                    {cartContent}
                </Paper>
                <Button sx={{marginTop: 4}} variant='contained'>
                    Proceed to Checkout
                </Button>
            </Box> 
            : <Box sx={{padding:4}} display='flex' justifyContent={'center'} flexDirection='column' alignItems={'center'}>
                <Typography variant={matches ? 'h5' : 'h3'} color={Colors.black}>
                    Your Cart is Empty!
                </Typography>
            </Box>}
            <Button onClick={() => setShowCart(false)}>Close</Button>
        </Drawer>
    )
}