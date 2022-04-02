import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../Button';
import { addToCart } from '../../redux/actions/cartActionCreators';
import './styles.css';

const ItemDetails = (props) => {
     let params = useParams();
     const ItemDet_Id = parseInt(params.itemId);
     let Item;
     const navigate = useNavigate();
     if(typeof ItemDet_Id === 'number') {
        Item = props.items.find(item => item.id === ItemDet_Id);
    }

     useEffect(() => {
        if(!Item){
            navigate("/");
        }
     });

  return (
    <>
    {
        Item && 
        <div className="container-fluid">
            <div className="card border-0 px-2 py-3 text-center">
                <div className="row">
                    <div className="img-container col-12 col-sm-4 ">
                        <img src={Item.image} alt="" className="img-fluid" />
                    </div>
                    <div className="col-12 col-sm-8 mt-4 mt-sm-0">
                        <div className="card-body">
                            <h1 className="card-title h3">{Item.title}</h1>
                            <p className="card-text">{Item.description}</p>
                            <div className="mb-2 mb-sm-3">Price: $ {Item.price}</div>
                            <div className="mb-2 mb-sm-5">
                                <Link to="/">
                                    <Button>Continue shopping</Button>
                                </Link>
                                <Link to="/cart">
                                    <Button cartBtn onClick={() => props.handleCartBtn(Item)}>{props.cartItemsIds.includes(ItemDet_Id) ? 'In cart' : 'Add to cart'}</Button>
                                </Link>
                            </div>
                            <hr />
                            <p className="small text-muted text-start">category: {Item.category}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    }
    </>
  )
// me. or instead of useNavigate: 
//   return <Navigate to="/"/>
}

const mapStateToProps = (state) => ({
items: state.items,
cartItems: state.cartItems,
cartItemsIds: state.cart.cartItems.map(item => item.id)
})

const mapDispatchToProps = (dispatch) => ({
    handleCartBtn: (itemP) => dispatch(addToCart(itemP))
})

const ItemDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
export default ItemDetailsContainer;
