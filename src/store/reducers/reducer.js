const INITIAL_STATE = {
    categories: [],
    doesSearch: false,
    groups: [],
    favorites: [],
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
        ...state,
        categories: [],
        groups: [],
        favorites: [],
        isUserAuth: false,
        products: [],
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
        case 'SEARCH_PRODUCT':
            return userSearch({...state}, action.payload);
        case 'SEARCH_BY_CATEGORY':
            return searchByCategory({...state})
        default: return state;
    }
};