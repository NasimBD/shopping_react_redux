import {actionTypes} from '../constants/actionTypes';


export const addToCart = (item) => ({
    type: actionTypes.ADD_ITEM_CART,
    payload: item
})

export const remove_cart_item = (itemId) => ({
    type: actionTypes.REMOVE_ITEM_CART,
    payload: itemId
})

export const increase_cart_item = (itemId) => ({
    type: actionTypes.INCREASE_ITEM_CART,
    payload: itemId
})

export const decrease_cart_item = (itemId) => ({
    type: actionTypes.DECREASE_ITEM_CART,
    payload: itemId
})

export const clear_cart = (itemId) => ({
    type: actionTypes.CLEAR_CART
})