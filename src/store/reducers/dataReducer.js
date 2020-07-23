const INITIAL_STATE = {
    categories: [],
    products: [],
    subcategories: [],
};

const categoriesData = (state, payload) => {
    return {
        ...state,
        categories: payload
    };
};

const subcategoriesData = (state, payload) => {
    return {
        ...state,
        subcategories: payload
    };
};

const productsData = (state, payload) => {
    return {
        ...state,
        products: payload
    };
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return categoriesData({...state}, action.payload);
        case 'FETCH_SUBCATEGORIES':
            return subcategoriesData({...state}, action.payload);
        case 'FETCH_PRODUCTS':
            return productsData({...state}, action.payload);
        default: return state;
    }
};

export default reducer;