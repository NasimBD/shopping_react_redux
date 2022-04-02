import {actionTypes} from '../constants/actionTypes';

export const get_category_items =  (category) => ({
    type: actionTypes.GET_CATEGORY_ITEMS,
    payload: category
})

export const open_modal = (item) => ({
    type: actionTypes.OPEN_MODAL,
    payload: item
})

export const close_modal = () => ({
    type: actionTypes.CLOSE_MODAL
})
