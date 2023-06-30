import { useUIContext } from "../context";


function useWishList(product) {
    const {wishList, setWishList} = useUIContext();
    
    const addToWishList = () => {
        wishList.findIndex(c => c.id === product.id) >= 0 
        ? setWishList(wishList.filter(c => c.id !== product.id)) 
        : setWishList(c => [...c, product]);
    }
    
    return {addToWishList}
}

export default useWishList;