const INITIAL_STATE = {
    favorites: [],
};

const addFavorite = (state, payload) => {
    return {
        ...state,
        favorites: [...state.favorites, payload]
    };
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return addFavorite({...state}, action.payload);
        default: return state;
    }
};

export default reducer;