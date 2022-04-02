import { actionTypes } from '../constants/actionTypes';
import { getFromLocalStorage, removeFromLocalStorage, saveInLocalStorage } from '../../functions';

const initialState =  getFromLocalStorage('nasims-log') ?  getFromLocalStorage('nasims-log') : {
    loggedUser: null,
    isLoggedIn: false
};

export const log = (state = initialState, action) => {
    
    switch(action.type){
        case (actionTypes.LOGIN_USER):
            if(action.payload) {
                const newState = {...state, loggedUser: action.payload, isLoggedIn: true};
                saveInLocalStorage('nasims-log', newState);
                return newState;
            }
            else return state;

        case (actionTypes.LOGOUT_USER):
            removeFromLocalStorage('nasims-log');
            return {...state, loggedUser: null, isLoggedIn: false};

        default: 
            return state;
    }
}

