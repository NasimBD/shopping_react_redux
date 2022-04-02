import React from 'react';
import { Link } from 'react-router-dom';
import './cart-style.css';

export const CartRow = (props) => {
    const {id, title, image, price, qty} = props.item;

  return (
    <div className="row align-items-center mb-3 mb-md-4">
        <div className="col-12 col-sm-2 col-lg-2">
            <Link to={`/details/${id}`}>
                <img src={image} alt="title" className="img-fluid-n" />
            </Link>
        </div>


        <div className="col-12 col-sm-6 col-lg-7 mt-2 mt-sm-0 d-flex justify-content-between">
            <span className="item-title">{title}</span>
            <i className="fas fa-trash-alt text-danger" onClick={() => props.onRemoveItemClick(id)}></i>
        </div>


        <div className="col-12 col-sm-4 col-lg-3 mt-2 mt-sm-0 d-flex flex-column align-items-center flex-lg-row">
            <div className="d-flex justify-content-center mb-2 mb-md-0">
                <button type="button" className="btn btn-sm btn-light"><i className="fas fa-chevron-up" onClick={() => props.onIncItemClick(id)}></i></button>
                <span className="qty text-center px-1">{qty}</span>
                <button type="button" className="btn btn-sm btn-light"><i className="fas fa-chevron-down" onClick={() => props.onDecItemClick(id)}></i></button>
            </div>
            <div className="d-flex justify-content- align-items-center">
                <span className="small">subtotal:&nbsp;</span>
                <span className="fw-bold">$ {price * qty}</span>
            </div>
        </div>
    </div>
  )
}
