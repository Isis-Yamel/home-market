import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import dataReducer from './dataReducer';
import favoritesReducer from './favoritesReducer'
import searchReducer from './searchReducer';

export default combineReducers({
    auth: authReducer,
    cart: cartReducer,
    data: dataReducer,
    favorite: favoritesReducer,
    search: searchReducer,
});