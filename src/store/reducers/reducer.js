const INITIAL_STATE = {
    token: '',
    isUserAuth: false,
};

const authUser = (state, payload) => {
    return {
        ...state,
        token: payload,
        isUserAuth: true
    };
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return authUser({...state}, action.payload);
        default: return state;
    }
};