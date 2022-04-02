import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import { Button } from './Button';
import * as itemsActions from '../redux/actions/itemsActionsCreators';
import { Link } from 'react-router-dom';

const Modal = (props) => {
    const modalRef = useRef(null);
    const {title, price, image} = props.modal.modalItem;

    const closeModalByClick = (e) => {
            if(modalRef.current && e.target !== modalRef.current && !modalRef.current.contains(e.target)){
                props.closeModal();
            }
        }


    // me. with 'click' does not work
    useEffect(() => {
        document.addEventListener('mousedown', closeModalByClick);
        return () => document.removeEventListener('mousedown', closeModalByClick);
    }, []);


  if(props.modal.modalIsOpen) return (
    <ModalWrapper>
        <div className="bg-white" id="popupModal-inner" ref={modalRef}>
            <h4 className="text-success text-capitalize p-3 p-sm-4 text-center">Item successfully added to your cart</h4>
            <div className="card border-0 px-3 py-3 text-center">
                <img src={image} alt="" className="img-fluid-n" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-text">Price: $ {price}</div>
                </div>
                <div className="card-footer">
                    <Link to="/">
                        <Button onClick={props.closeModal}>Continue shopping</Button>
                    </Link>
                    <Link to="/cart">
                        <Button cartBtn onClick={props.closeModal}>Cart</Button>
                    </Link>
                </div>
            </div>
        
            <button className="btn text-danger fw-bold position-absolute top-0 end-0 "onClick={() => props.closeModal()} >X</button>
        </div>
    </ModalWrapper>
  )
  return null;
}


export const ModalWrapper = styled.div`
position: fixed;
top: 0;
min-height: 100vh;
width: 100%;
background-color: rgba(0,0,0,0.5);
// overflow-y: scroll;

& * {
    font-family: Arial, sans-serif;
}

h4{
    background-color: var(--lightGreen);
}

#popupModal-inner{
    position: absolute;
    min-height: 100vh;
    width 85%;
    max-width: 400px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
}

.img-fluid-n{
    width: 100%;
    max-height: 40vh;
    object-fit: contain;
}

`

const mapStateToProps = (state) => ({
    modal : state.itemModal
})

const mapDispatchToProps = (dispatch) => ({
    closeModal : () => dispatch(itemsActions.close_modal())
})

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
export default ModalContainer;