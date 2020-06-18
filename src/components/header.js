import React, { Fragment } from 'react';
import whitelogo from '../assets/logo-white.png';

import '../css/styles/header.scss';

const Header = () => {
    return (
        <Fragment>
            <header>
                <h1 className='header__title'>Home market</h1>
                <img className='header__logo' alt='home market logo' src={whitelogo}/>
            </header>
        </Fragment>
    );
};

export default Header;