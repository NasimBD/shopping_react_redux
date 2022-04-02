import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { CartRow } from './CartRow';
import { CartInvoice } from './CartInvoice';
import * as cartActions from '../../redux/actions/cartActionCreators';

const Cart = (props) => {
  const {cartItems, cartTotalQty, cartTotalPrice} = props;

  return (
    <div className="container-fluid bg-transparent">
      {
        !!props.cartItems.length &&
        <>
          <ul className="list-unstyled">
            {
              cartItems.map(item => <CartRow
                 key={item.id}
                 item={item}
                 onIncItemClick={props.onIncItemClick}
                 onDecItemClick={props.onDecItemClick}
                 onRemoveItemClick={props.onRemoveItemClick}
                 onClearBtnClick={props.onClearBtnClick}

                 />)
              }      
          </ul>
          <div className="text-end mb-3 mb-md-4">
            <button className="btn btn-light" onClick={() => props.onClearBtnClick()}><i className="fas fa-times text-danger fst-italic pe-1"></i> Delete All Items</button>
          </div>

          <div className="mb-2 mb-sm-5 text-center mb-3 mb-md-4">
            <Link to="/">
                <Button>Continue shopping</Button>
            </Link>
            <Link to="/checkout">
                <Button className='bg-success text-light' onClick={props.onCheckoutBtnClick}>Checkout</Button>
            </Link>
          </div>

          <div>
            <CartInvoice cartTotalQty={cartTotalQty} cartTotalPrice={cartTotalPrice}/>
          </div>
        </>
      }
      
      {
        props.cartItems.length === 0 &&
        <div className="text-center">
          <h5>Your cart is empty.</h5>
            <div className="mb-2 mb-sm-5">
              <Link to="/">
                  <Button>Start shopping</Button>
              </Link>
          </div>
          </div>       
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems : state.cart.cartItems,
  cartTotalQty : state.cart.cartTotalQty,
  cartTotalPrice: state.cart.cartTotalPrice
})

const mapDispatchToProps = (dispatch) => ({
  onIncItemClick: (itemId) => dispatch(cartActions.increase_cart_item(itemId)),

  onDecItemClick: (itemId) => dispatch(cartActions.decrease_cart_item(itemId)),

  onRemoveItemClick: (itemId) => dispatch(cartActions.remove_cart_item(itemId)),

  onClearBtnClick: () => dispatch(cartActions.clear_cart()),

  onCheckoutBtnClick: () => dispatch(cartActions.clear_cart())
})

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default CartContainer;
