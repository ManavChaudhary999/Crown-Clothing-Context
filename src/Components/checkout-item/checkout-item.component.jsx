import React, {useContext} from "react";
import "./checkout-item.styles.scss";

import {CartContext} from "../../Context/Cart/cart.context";

const CheckoutItem = ({item}) => {
    const {addCartItem, removeCartItem, clearCartItem} = useContext(CartContext);
    const {name, imageUrl, price, quantity }  = item;

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=> removeCartItem(item)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=> addCartItem(item)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=> clearCartItem(item)}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;