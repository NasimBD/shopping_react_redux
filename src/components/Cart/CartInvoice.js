import React from 'react'
import './cart-style.css';

export const CartInvoice = (props) => {
  const {cartTotalQty, cartTotalPrice} = props;

  return (
   <div className="row">
     <div className="cart col-12 col-sm-8 col-md-6 m-auto text-center">
        <h3 className="card-header text-success-n fw-bold text-capitalize">
          Your invoice
        </h3>
        <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><span className="text-capitalize fw-bold">Total quantity :</span> <span>{cartTotalQty}</span></li>
              <li className="list-group-item"><span className="text-capitalize fw-bold">Total Price :</span><span> $ {cartTotalPrice}</span></li>
            </ul>
        </div>
      </div>
   </div>
  )
}
