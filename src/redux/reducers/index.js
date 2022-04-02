import { combineReducers } from "redux";
import { cart } from "./cart";
import { log } from './log';
import * as itemsReducers from './items';

const reducer = combineReducers({
    log,
    cart,
    items: itemsReducers.getItemsReducer,
    itemModal: itemsReducers.itemModalReducer
});

export default reducer;