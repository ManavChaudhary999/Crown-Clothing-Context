import React, {useContext} from "react";
import "./cart-icon.styles.scss";

import {ReactComponent as ShoppingIcon} from "../../Assets/bag.svg";

import CartContext from "../../Context/Cart/cart.context";

const CartIcon = () =>{
    const Cart = useContext(CartContext);
    const {toggleCartHidden} = Cart;

    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{0}</span>
        </div>
    );
}

export default CartIcon;