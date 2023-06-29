import { useUIContext } from "../context";


function useCart(product) {
    const {cart, setCart} = useUIContext();

    const addToCart = () => {
        cart.findIndex(c => c.id === product.id) >= 0 
        ? setCart(cart.filter(c => c.id !== product.id)) 
        : setCart(c => [...c, product]);
        
    }

    const addToCartText = cart.findIndex(c => c.id === product.id) >= 0 ? 'Remove from cart' : 'Add to Cart';

    return {addToCart, addToCartText}
}

export default useCart;