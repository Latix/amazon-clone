import React from 'react';
import Rating from '@material-ui/lab/Rating';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({...props}) {
    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
            }
        })
    }
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
            {
                (state.basket.findIndex((basketItem) => basketItem.id === props.id) < 0) ?
                (
                    <button onClick={addToBasket}>Add to basket</button>
                ) :
                (
                    <button className="disable__addToBasketButton">Added to basket</button>
                )
            }
            
        </div>
    )
}

export default Product
