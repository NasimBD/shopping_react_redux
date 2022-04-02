import { storeItems } from '../../storeItems';
import { actionTypes } from "../constants/actionTypes";


export const getItemsReducer = (state = storeItems, action) => {
    switch(action.type){
        case(actionTypes.GET_CATEGORY_ITEMS):
            if(action.payload === 'all') return storeItems;
            return storeItems.filter(item => item.category === action.payload);

        default:
            return state;
    }
}


export const itemModalReducer = (state = {
    modalIsOpen: false,
    modalItem: {}
}, action) => {
    switch(action.type){
        case(actionTypes.OPEN_MODAL):
        return {
            modalIsOpen: true,
            modalItem: action.payload
        };

        case(actionTypes.CLOSE_MODAL):
        return {...state, modalIsOpen: false};


        default:
            return state;
    }
}