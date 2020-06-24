import React from 'react';
import Header from '../components/header';
import Home from '../components/home-page/home';
import Footer from '../components/footer';
import userLogin from '../components/user-registration/userLogin';
import userSignin from '../components/user-registration/userSignin';
import ForgotPassword from '../components/user-registration/forgotPassword';
import '../css/styles/App.scss';

import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

const App = () => {
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
                    </Switch>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
