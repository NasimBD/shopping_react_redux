import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export const Checkout = () => {
  return (
    <div className="container-fluid bg-transparent mt-3 mt-md-4 text-center">
      <h4 className="text-success mb-3 mb-md-4 fw-bold">Your order has been placed successfully&nbsp;!</h4>
      <h6 className="text-secondary mb-3 mb-md-4">Many thanks for your shopping <i className="far fa-heart  text-pink-n fw-light"></i></h6>
      <Link to="/">
        <Button>Homepage <i className="fa fa-home"></i></Button>
      </Link>
    </div>
  )
}

