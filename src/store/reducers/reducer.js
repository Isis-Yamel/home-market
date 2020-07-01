const INITIAL_STATE = {
    categories: [],
    groups: [],
    favorites: [],
    isUserAuth: false,
    products: [],
    token: '',
};

const authUser = (state, payload) => {
    return {
        ...state,
        token: payload,
        isUserAuth: true
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

const onUserLogOut = (state) => {
    return {
        ...state,
        categories: [],
        groups: [],
        isUserAuth: false,
        products: [],
        token: '',
    };
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return authUser({...state}, action.payload);
        case 'FETCH_GROUP':
            return groupData({...state}, action.payload);
        case 'FETCH_CATEGORIES':
            return categoriesData({...state}, action.payload);
        case 'FETCH_PRODUCTS':
            return productsData({...state}, action.payload);
        case 'LOG_OUT':
            return onUserLogOut({...state});
        default: return state;
    }
};