import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Item = ({item, inCart, addClick, itemModal}) => {
  return (
    <ItemWrapper className="item p-1 p-sm-2 bg-transparent position-relative overflow-hidden">
        <Link to={`/details/${item.id}`} className="router-link text-decoration-none">
            <div className="card border-0 p-3">
                <img src={item.image} alt={item.title} className="card-img-top-n" />
                <div className="card-body d-flex flex-column justify-content-between text-center text-dark">
                    <h6 className="card-title">{item.title}</h6> 
                    <span className="card-text fw-bold">$ {item.price}</span>
                </div>
            </div>
        </Link>
        {
            inCart ?
            <span className="in-cart position-absolute p-2">In Cart</span> :
            <button type="button" className="add-cart btn position-absolute" onClick={() => addClick(item)}><i className="fa fa-cart-plus" aria-hidden="true"></i></button>
        }
    </ItemWrapper>
  )
}


Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
    }).isRequired,
    inCart: PropTypes.bool.isRequired
}


const ItemWrapper = styled.div`
&:hover{
    outline: 1px solid var(--lightGray);
    box-shadow: 2px 2px 5px var(--lightGray);
}

&:hover img{
    transform: scale(1.1);
}

.card{
    height: 100%;
}

.card-img-top-n{
    width: 100%;
    object-fit: contain;
    transition: 0.4s linear;
}

.bg-white{
    height: 100%;
}

.in-cart, .add-cart{
    color: white;
    background-color: var(--lightGreen);
    border-radius: 10px 0 0;
    transition: 0.4s ease-in-out;
    font-size: 1.3rem;
    right: -5rem;
    bottom: -3rem;
}

.in-cart{
    font-size: 1rem;
}

&:hover .in-cart, &:hover .add-cart{
    right: 0.5rem;
    bottom: 0.5rem;
}

@media screen and (max-width:576px){
    &{
        flex: 0 0 100%;
        margin-bottom: 0.5rem;

        & .card-img-top-n{
            height: 7rem;
        }
    }
  }
  
  @media screen and (min-width:576px) and (max-width:769px){
    &{
        flex: 0 0 50%;

    & .card-img-top-n{
        height: 8rem;
        }
    }
  }

  @media screen and (min-width:769px){
    &{
        flex: 0 0 33%;

        &  .card-img-top-n{
            height: 9rem;
        }
    }
  }
`