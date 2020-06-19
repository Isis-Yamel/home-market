import React, { Fragment } from 'react';
import redlogo from '../../assets/logo-red.png';

import { FormattedMessage } from 'react-intl';


const UserRegistration = () => {
    return (
        <Fragment>
            <section className='home__signSection'>
                <img className='home__image' alt='home market logo' src={redlogo}/>
                <button className='home__button'>
                    <FormattedMessage id='user-sign'/>
                </button>
                <button className='home__button'>
                    <FormattedMessage id='user-login'/>
                </button>
            </section>
        </Fragment>
    );
};

export default UserRegistration;