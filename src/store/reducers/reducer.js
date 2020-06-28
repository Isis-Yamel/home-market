const INITIAL_STATE = {
    token: '',
    isUserAuth: false,
    groups: []
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

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return authUser({...state}, action.payload);
        case 'FETCH_GROUP':
            return groupData({...state}, action.payload);
        default: return state;
    }
};