import {combineReducers} from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // cart is a store data we only want to save as local Storage
}

// Combine Reducer is used to combine all the reducers(user, cart) so that in store.js we don't have to import every reducer in createStore.
const rootReducer = combineReducers({
    cart: cartReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);