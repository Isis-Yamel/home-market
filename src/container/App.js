import React from 'react';
import Header from '../components/header';
import Home from '../components/home-page/home';
import Footer from '../components/footer';
import userLogin from '../components/user/userLogin';
import userSignin from '../components/user/userSignin';
import ForgotPassword from '../components/user/forgotPassword';
import Menu from '../components/catalog/menu';
import '../css/styles/App.scss';

import { connect } from 'react-redux';
import ProtectedRoute from '../utils/protectedRoute';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

const App = ({ auth }) => {
    return (
        <BrowserRouter>
            <div className="app__layout">
                <Header/>
                <main className='main__container'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/log-in' component={userLogin}/>
                        <Route path='/sig-in' component={userSignin}/>
                        <Route path='/forgot-password' component={ForgotPassword}/>
                        <ProtectedRoute path='/catalog' loggedIn={auth} component={Menu}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth.isUserAuth
    };
};


export default connect(mapStateToProps, null)(App);
