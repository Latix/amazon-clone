export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => {
    let amount = 0;
    for(let i = 0;i < basket.length;i++) {
        amount += Number(basket[i].price);
    }
    return amount;
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //  Logic for adding item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // Item exists in basket, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn('Cannot remove product!');
            }
            return { ...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer;