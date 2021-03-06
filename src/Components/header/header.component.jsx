import React, {useContext} from "react";
import {Link} from "react-router-dom";
import "./header.styles.scss";

import {ReactComponent as Logo} from "../../Assets/logo.svg";
import {auth} from "../../Firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import CurrentUserContext from "../../Context/User/user.context";
import {CartContext} from "../../Context/Cart/cart.context";

const Header = () =>{
    const currentUser = useContext(CurrentUserContext);
    const {hidden} = useContext(CartContext);

    return(
        <div className="header">    
            <Link to="/"><Logo className="logo-container" /></Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contacts">CONTACTS</Link>
                {
                    currentUser ?
                        <div className="option" onClick={()=> auth.signOut()}>SIGNOUT</div>
                        :
                        <Link className="option" to="/signin">SIGNIN</Link>
                }
                <CartIcon className="option" />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
}

export default Header;