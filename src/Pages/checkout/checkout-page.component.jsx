import React, {useContext} from "react";
import "./checkout-page.styles.scss";

import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
import StripeButton from "../../Components/stripe-button/stripe-button.component";

import {CartContext} from "../../Context/Cart/cart.context";

const CheckoutPage = () => {
    const {cartItems, cartTotalPrice} = useContext(CartContext);
    
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
            }
            <div className="total">TOTAL: ${cartTotalPrice}</div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
            <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
            <StripeButton price={cartTotalPrice} />
        </div>
    );
};

export default CheckoutPage;