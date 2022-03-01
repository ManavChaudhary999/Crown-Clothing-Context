import {createContext} from "react";

import SHOP_DATA from "./shop.data";

const ShopContext = createContext({
    collectionsData: SHOP_DATA,
    // collections: Object.keys(collectionsData).map(key => collectionsData[key]),
});

export default ShopContext;