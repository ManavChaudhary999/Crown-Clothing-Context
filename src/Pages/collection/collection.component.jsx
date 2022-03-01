import React, {useContext} from "react";
import "./collection.styles.scss";

import CollectionItem from "../../Components/collection-item/collection-item.component";
import ShopContext from "../../Context/Shop/shop.context";

const CollectionPage = ({match}) => {
    const {collectionsData} = useContext(ShopContext);
    const collection = collectionsData[match.params.collectionId];

    return (
        <div className="collection-page">
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {
                    collection.items.map(item => 
                    <CollectionItem key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    );
}

export default CollectionPage;