import React, {useContext} from "react";
import "./collection-item.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import {CartContext} from "../../Context/Cart/cart.context";

const CollectionItem = ({item}) =>
{
    const {addCartItem} = useContext(CartContext);
    const {name, imageUrl, price} = item;

    return(
        <div className= "collection-item">
            <div className= "image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={()=> addCartItem(item)}>Add to Cart</CustomButton>
        </div>
    );
}

export default CollectionItem;