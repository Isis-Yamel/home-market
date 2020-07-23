const INITIAL_STATE = {
    doesSearch: false,
    searchTerm: '',
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

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCH_PRODUCT':
            return userSearch({...state}, action.payload);
        case 'SEARCH_BY_CATEGORY':
            return searchByCategory({...state});
        default: return state;
    }
};

export default reducer;