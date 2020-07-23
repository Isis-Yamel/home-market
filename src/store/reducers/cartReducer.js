const INITIAL_STATE = {
    shopCart: [],
};

const userAddToCart = (state, payload) => {
    return {
        ...state,
        shopCart: [...state.shopCart, payload]
    };
};

const userRemoveFromCart = (state, payload) => {
    let removeFromCart = [...state.shopCart].filter(item => item.item.id !== payload);
    return {
        ...state,
        shopCart: removeFromCart

    };
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return userAddToCart({...state}, action.payload);
        case 'REMOVE_CART':
            return userRemoveFromCart({...state}, action.payload);
        default: return state;
    }
};

export default reducer;