import onUserLogin from '../../apis/userLogin';
import onUserSignin from '../../apis/userSignin';
import fetchCategories from '../../apis/fetchCategories';
import fetchSubCategories from '../../apis/fetchSubCategories';
import fetchProducts from '../../apis/fetchProducts';

export const logIn = (data) => {
    return async dispatch => {
        onUserLogin(data).then((response) => {
            dispatch({
                type: 'LOG_IN',
                payload: response.data
            })
        })
    };
};

export const logOut = () => {
    return dispatch => {
        dispatch({
            type: 'LOG_OUT',
        });
    };
};

export const signIn = (data) => {
    return async dispatch => {
        onUserSignin(data)
        .then((response) => {
            dispatch({
                type: 'SIGN_IN',
                payload: 'Success'
            })
        })
        .catch(
            dispatch({
                type: 'SIGN_IN',
                payload: 'Error'
            })
        )
    };
};

export const marketInformation = (data) => {
    return async dispatch => {
        fetchCategories(data).then((response) => {
            dispatch({
                type: 'FETCH_CATEGORIES',
                payload: response.data
            })
        })
        fetchSubCategories(data).then((response) => {
            dispatch({
                type: 'FETCH_SUBCATEGORIES',
                payload: response.data
            })
        })
        fetchProducts(data).then((response) => {
            dispatch({
                type: 'FETCH_PRODUCTS',
                payload: response.data
            })
        })
    };
};

export const addFavorite = (data) => {
    return {
        type: 'ADD_FAVORITE',
        payload: data
    };
};

export const addCart = (data) => {
    return {
        type: 'ADD_TO_CART',
        payload: data
    };
};

export const removeFromCart = (data) => {
    return {
        type: 'REMOVE_CART',
        payload: data
    };
};

export const onUserSearch = (data) => {
    return {
        type: 'SEARCH_PRODUCT',
        payload: data
    };
};

export const searchBySubCategory = () => {
    return {
        type: 'SEARCH_BY_CATEGORY',
    };
};
