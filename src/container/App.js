import React from 'react';
import Header from '../components/header';
import Home from '../components/home-page/home';
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
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
