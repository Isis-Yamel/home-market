import React from 'react';
import whitelogo from '../assets/logo-white.png';

import '../css/styles/header.scss';

const Header = () => {
    return (
        <div className='header__background'>
            <header className='header__container'>
                <h1 className='header__title'>Home market</h1>
                <img className='header__logo' alt='home market logo' src={whitelogo}/>
            </header>
        </div>
    );
};

export default Header;