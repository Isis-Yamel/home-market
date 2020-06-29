const INITIAL_STATE = {
    categories: [],
    groups: [],
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

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return authUser({...state}, action.payload);
        case 'FETCH_GROUP':
            return groupData({...state}, action.payload);
        case 'FETCH_CATEGORIES':
            return categoriesData({...state}, action.payload);
        default: return state;
    }
};