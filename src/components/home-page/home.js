import React, { Fragment } from 'react';
import UserRegistration from './userRegister';
import AboutUs from './aboutUs';
import Benefits from './benefits';
import SearchInfo from './searchInformation';

import '../../css/styles/home.scss';

const Home = () => {
    return (
        <Fragment>
            <UserRegistration/>
            <AboutUs/>
            <Benefits/>
            <SearchInfo/>
        </Fragment>
    );
};

export default Home;