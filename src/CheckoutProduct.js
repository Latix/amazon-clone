import React from 'react'
import Rating from '@material-ui/lab/Rating';
import './Checkout.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({...props}) {
    const [ state, dispatch ] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.item,
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={props.image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {props.title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    <Rating name="disabled" value={props.rating} disabled />
                </div>
                <button className="checkout__removeButton" onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
