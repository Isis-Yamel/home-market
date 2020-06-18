import React from 'react';

import '../css/styles/home.scss';

import { FormattedMessage } from 'react-intl';

const Home = () => {
    return (
        <section className='home__section'>
            <h2>
                <FormattedMessage id='hello'/>
            </h2>
            <p>Here will be the content for each route</p>
        </section>
    );
};

export default Home;