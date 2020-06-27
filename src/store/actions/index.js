import onUserLogin from '../../apis/userLogin';
import onUserSignin from '../../apis/userSignin';
import fetchGroups from '../../apis/fetchGroups';

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
