import React from 'react'
import { connect } from 'react-redux';
import * as cartActions from '../../redux/actions/cartActionCreators';
import * as itemsActions from "../../redux/actions/itemsActionsCreators";
import { Item } from '../Item/Item';
import SecondaryNavbarContainer from '../Navbar/SecondaryNavbar';
import './style.css';

const ItemsList = (props) => {

  return (
    <>
      <SecondaryNavbarContainer/>
      <div className="container-fluid">
        <div className="items-list mt-2 mt-md-3 mx-auto">
          {
            props.items.map(item => <Item key={item.id} item={item} inCart={props.cartItemsIds.includes(item.id)} addClick={props.addClick}/>)
          }
        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state) => ({
  items : state.items,
  cartItemsIds: state.cart.cartItems.map(cartItem => cartItem.id),
  itemModal: state.itemModal
});

const mapDispatchToProps = (dispatch) => ({
  addClick: (item) => {
    dispatch(itemsActions.open_modal(item));
    dispatch(cartActions.addToCart(item));
  }
});

const ItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemsList);
export default ItemsListContainer;