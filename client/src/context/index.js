import { createContext, useContext, useState } from "react"


export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false);
    const [wishList, setWishList] = useState([]);

    const value = {
        cart,
        setCart,
        showCart,
        setShowCart,
        wishList,
        setWishList
    }

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}