import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ProtectedRoute from '../../utils/protectedRoute';
import Profile from '../user/myProfile';
import MenuBar from './menuBar';
import SearchBar from './searchBar';
import Catalogue from './catalogue';

const Menu = ({ auth }) => {
    return (
        <BrowserRouter>
            <MenuBar/>
            <SearchBar/>
            <Switch>
                <ProtectedRoute path='/my-profile' loggedIn={auth} component={Profile}/>
                <ProtectedRoute path='/catalog' loggedIn={auth} component={Catalogue}/>
            </Switch>
        </BrowserRouter>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.data.isUserAuth
    };
};

export default connect(mapStateToProps, null)(Menu);