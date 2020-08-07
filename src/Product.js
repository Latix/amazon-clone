import React from 'react';
import Rating from '@material-ui/lab/Rating';
import './Product.css';
function Product({...props}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>
                    {props.title}
                </p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                    <Rating name="disabled" value={props.rating} disabled />
                </div>
            </div>
            <img src={props.image} alt="" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
