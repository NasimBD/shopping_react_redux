import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.jpg';
import LogoName from '../../images/nasims.png';
import "./style.css"

const PrimaryNavbar = (props) => {
  return (
    <nav className="p-2 p-md-3 smooth-shadow d-flex justify-content-between align-items-center">
        <Link to="/" id="nav-brand" className="me-auto"><img src={Logo} alt="nasim's"/><img src={LogoName} alt="nasim's"/></Link>
        <Link to="/" id="nav-home" className="me-3"><i className="fa fa-home"></i></Link>
        <Link to="/cart" id="nav-cart-link" className="d-flex align-items-center text-decoration-none p-2">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <span className="badge rounded-pill ms-1">{props.cartTotalQty}<span className="visually-hidden">cart items</span></span>
        </Link>
    </nav>
  )
}


const mapStateToProps = (state) => ({
  cartTotalQty: state.cart.cartTotalQty
})

const PrimaryNavContainer = connect(mapStateToProps)(PrimaryNavbar);
export default PrimaryNavContainer;
