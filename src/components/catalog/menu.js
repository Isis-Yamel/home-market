import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ProtectedRoute from '../../utils/protectedRoute';
import Profile from '../user/myProfile';
import MenuBar from './menuBar';

const Menu = ({ auth }) => {
    return (
        <BrowserRouter>
            <div>
                <MenuBar/>
                <Switch>
                    <ProtectedRoute path='/my-profile' loggedIn={auth} component={Profile}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth.isUserAuth
    };
};

export default connect(mapStateToProps, null)(Menu);