import onUserLogin from '../../apis/userLogin';
import onUserSignin from '../../apis/userSignin';
import fetchGroups from '../../apis/fetchGroups';
import fetchCategories from '../../apis/fetchCategories';
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

export const groupInformation = (data) => {
    return async dispatch => {
        fetchGroups(data).then((response) => {
            dispatch({
                type: 'FETCH_GROUP',
                payload: response.data
            })
        })
    };
};

export const categoriesInformation = (data) => {
    return async dispatch => {
        fetchCategories(data).then((response) => {
            dispatch({
                type: 'FETCH_CATEGORIES',
                payload: response.data
            })
        })
    };
};

export const productsInformation = (data) => {
    return async dispatch => {
        fetchProducts(data).then((response) => {
            dispatch({
                type: 'FETCH_PRODUCTS',
                payload: response.data
            })
        })
    };
};
