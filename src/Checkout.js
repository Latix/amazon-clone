import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="image__container">
                <img 
                className="checkout__ad" 
                src="https://financehippy.com/wp-content/uploads/2017/01/o-online-shopping-facebook.jpg" 
                alt="" />
            </div>
            {basket.length === 0 ? (
                <div className="text-center">
                    <h2>Your Shopping Basket is empty!</h2>
                    <p>
                        You have no items in your basket.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    { basket.map((item) => (
                        <CheckoutProduct
                            key={item.id}
                            item={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Checkout
