import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';

function Subtotal() {
    const [{ basket }] = useStateValue();
    const config = {
        reference: (new Date()).getTime(),
        email: "kamsikodi@gmail.com",
        amount: getBasketTotal(basket),
        publicKey: 'pk_live_adb9511439aa54da8741de8601ef2afa1509a46b',
    };
    const componentProps = {
        ...config,
        text: 'Proceed to checkout',
        onSuccess: () => null,
        onClose: () => console.log('closed')
    };

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>({getBasketTotal(basket)})</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <PaystackConsumer {...componentProps} >
                {({initializePayment}) => <button className="subtotal__ProceedButton" onClick={() => initializePayment()}>Proceed to checkout</button>}
            </PaystackConsumer>
        </div>
    )
}

export default Subtotal
