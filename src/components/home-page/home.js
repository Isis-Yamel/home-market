import React, { Fragment } from 'react';
import UserRegistration from './userRegister';
import AboutUs from './aboutUs';
import Benefits from './benefits';

import '../../css/styles/home.scss';

const Home = () => {
    return (
        <Fragment>
            <UserRegistration/>
            <AboutUs/>
            <Benefits/>
        </Fragment>
    );
};

export default Home;