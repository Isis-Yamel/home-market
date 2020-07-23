const INITIAL_STATE = {
    isUserAuth: false,
    token: '',
};

const authUser = (state, payload) => {
    return {
        ...state,
        token: payload,
        isUserAuth: true
    };
};

const onUserLogOut = () => {
    return {
        isUserAuth: false,
        token: '',
    };
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return authUser({...state}, action.payload);
        case 'LOG_OUT':
            return onUserLogOut({...state});
        default: return state;
    }
};

export default reducer;