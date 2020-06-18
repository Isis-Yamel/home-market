import React from 'react';
import Header from '../components/header';
import Home from '../components/home';
import '../css/styles/App.scss';

const App = () => {
    return (
        <div className="app__layout">
            <Header/>
            <Home/>
        </div>
    );
};

export default App;
