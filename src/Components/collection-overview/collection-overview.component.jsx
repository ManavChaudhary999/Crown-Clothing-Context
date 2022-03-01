import React, {useContext} from "react";
import "./collection-overview.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.component";

import ShopContext from "../../Context/Shop/shop.context";

const CollectionOverview = () => {
    const {collectionsData} = useContext(ShopContext);
    const collections = Object.keys(collectionsData).map(key => collectionsData[key]);

    return(
        <div className="collection-overview">
            {collections.map(({id, title, items}) => (
                <CollectionPreview key={id} title={title} items={items} />
                ))
            }
        </div>
    );
}

export default CollectionOverview;