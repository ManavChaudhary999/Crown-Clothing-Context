import React, {createContext, useState, useEffect} from "react";

import {AddItemToCart, RemoveItemFromCart, ClearItemFromCart, CartItemCount, CartTotalPrice} from "./cart.utils";

export const CartContext = createContext({
    hidden: true,
    toggleCartHidden: ()=> {},
    cartItems: [],
    addCartItem: ()=> {},
    removeCartItem: ()=> {},
    clearCartItem: ()=> {},
    cartItemCount: 0,
    cartTotalPrice: 0
});

export const CartProvider = ({children})=> {
    const [cartItems, setCartItems] = useState([]);
    const [hidden, setHidden] = useState(true);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const toggleCartHidden = ()=> setHidden(!hidden);   
    const addItem = item => setCartItems(AddItemToCart(cartItems, item)); 
    const removeItem = item => setCartItems(RemoveItemFromCart(cartItems, item));
    const clearItem = item => setCartItems(ClearItemFromCart(cartItems, item));

    useEffect(()=> {
        setCartCount(CartItemCount(cartItems));
        setCartTotal(CartTotalPrice(cartItems));
    }, [cartItems]);

    return(
        <CartContext.Provider value={{
            hidden,
            toggleCartHidden,
            cartItems,
            addCartItem: addItem,
            removeCartItem: removeItem,
            clearCartItem: clearItem,
            cartItemCount: cartCount,
            cartTotalPrice: cartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};

