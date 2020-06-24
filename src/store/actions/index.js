import onUserLogin from '../../apis/userLogin';

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
