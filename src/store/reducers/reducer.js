const INITIAL_STATE = {
    cart: [],
    categories: [],
    doesSearch: false,
    favorites: [],
    groups: [],
    isUserAuth: false,
    products: [],
    searchTerm: '',
    token: '',
};

const authUser = (state, payload) => {
    return {
        ...state,
        token: payload,
        isUserAuth: true
    };
};

const onUserLogOut = (state) => {
    return {
        cart: [],
        categories: [],
        doesSearch: false,
        favorites: [],
        groups: [],
        isUserAuth: false,
        products: [],
        searchTerm: '',
        token: '',
    };
};

const groupData = (state, payload) => {
    return {
        ...state,
        groups: payload
    };
};

const categoriesData = (state, payload) => {
    return {
        ...state,
        categories: payload
    };
};

const productsData = (state, payload) => {
    return {
        ...state,
        products: payload
    };
};

const addFavorite = (state, payload) => {
    return {
        ...state,
        favorites: [...state.favorites, payload]
    };
};

const userAddToCart = (state, payload) => {
    return {
        ...state,
        cart: [...state.cart, payload]
    };
};

const userRemoveFromCart = (state, payload) => {
    let removeFromCart = [...state.cart].filter(item => item.item.id !== payload);
    return {
        ...state,
        cart: removeFromCart

    };
};

const userSearch = (state, payload) => {
    return {
        ...state,
        doesSearch: true,
        searchTerm: payload
    };
};

const searchByCategory = (state) => {
    return {
        ...state,
        doesSearch: false,
    };
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return authUser({...state}, action.payload);
        case 'LOG_OUT':
            return onUserLogOut({...state});
        case 'FETCH_GROUP':
            return groupData({...state}, action.payload);
        case 'FETCH_CATEGORIES':
            return categoriesData({...state}, action.payload);
        case 'FETCH_PRODUCTS':
            return productsData({...state}, action.payload);
        case 'ADD_FAVORITE':
            return addFavorite({...state}, action.payload);
        case 'ADD_TO_CART':
            return userAddToCart({...state}, action.payload);
        case 'REMOVE_CART':
            return userRemoveFromCart({...state}, action.payload);
        case 'SEARCH_PRODUCT':
            return userSearch({...state}, action.payload);
        case 'SEARCH_BY_CATEGORY':
            return searchByCategory({...state});
        default: return state;
    }
};