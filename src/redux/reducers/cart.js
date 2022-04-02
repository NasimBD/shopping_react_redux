import {actionTypes} from '../constants/actionTypes';
import * as localStorageActions from '../../functions';


const initialCartState =  localStorageActions.getFromLocalStorage('nasims-cart') ?  localStorageActions.getFromLocalStorage('nasims-cart') : {
    cartItems: [],
    cartTotalQty: 0,
    cartTotalPrice: 0.00
};



export const cart = (state = initialCartState, action) => {
    switch(action.type){
        case actionTypes.ADD_ITEM_CART: {
            const newItem = action.payload;
            const ItemInCart = state.cartItems.find(item => item.id === newItem.id);
            if(!ItemInCart){
                const cart = {
                    cartItems : state.cartItems.concat({...newItem, qty: 1}),
                    cartTotalQty : state.cartTotalQty + 1,
                    cartTotalPrice: state.cartTotalPrice + newItem.price
                };
                localStorageActions.saveInLocalStorage('nasims-cart', cart)
                return cart;
            }
            return state;
        }


        case actionTypes.REMOVE_ITEM_CART: {
            const itemId = action.payload;
            const cartItems = state.cartItems.filter(item => item.id !== itemId);
            const cart = {
                cartItems,
                cartTotalQty: cartTotals(cartItems).cartTotalQty,
                cartTotalPrice: cartTotals(cartItems).cartTotalPrice
            };
            localStorageActions.saveInLocalStorage('nasims-cart', cart)
            return cart;
        }

            
        case actionTypes.INCREASE_ITEM_CART: {
            const cartItems = state.cartItems.map(item => {
                if(item.id === action.payload){
                    return {...item, qty: item.qty + 1}
                }
                return item;
            })
            const cart = {
                cartItems,
                cartTotalQty: cartTotals(cartItems).cartTotalQty,
                cartTotalPrice: cartTotals(cartItems).cartTotalPrice
            };
            localStorageActions.saveInLocalStorage('nasims-cart', cart)

            return  cart;  
         }


         case actionTypes.DECREASE_ITEM_CART: {
            const cartItems = [];
            state.cartItems.forEach(item => {
                if(item.id === action.payload){
                    if(item.qty > 1){
                        cartItems.push({...item, qty: item.qty - 1})
                    }     
                }else{
                    cartItems.push(item);
                }            
            })
            const cart = {
                cartItems,
                cartTotalQty: cartTotals(cartItems).cartTotalQty,
                cartTotalPrice: cartTotals(cartItems).cartTotalPrice
            };
            localStorageActions.saveInLocalStorage('nasims-cart', cart)
            return cart;  
         }


        case actionTypes.CLEAR_CART: {
            const cartItems = [];
            const cart = {
                cartItems,
                cartTotalQty : 0,
                cartTotalPrice : 0.00,
            };
            localStorageActions.saveInLocalStorage('nasims-cart', cart)
            return cart;
        }


        default:
            return state;
    }
}


const cartTotals = (cartItemsP) => {
    let cartTotals = {
        cartTotalQty: 0,
        cartTotalPrice: 0.00
    };

    cartItemsP.forEach(item => {
        cartTotals.cartTotalQty += item.qty;
        cartTotals.cartTotalPrice += parseFloat(item.qty * item.price);
    })

    return {
            cartTotalQty: cartTotals.cartTotalQty,
            cartTotalPrice: (cartTotals.cartTotalPrice).toFixed(2)
        }
    

} 
