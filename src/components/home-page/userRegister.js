import React, { Fragment } from 'react';
import redlogo from '../../assets/logo-red.png';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';


const UserRegistration = () => {
    return (
        <Fragment>
            <section className='mainSection home__signSection'>
                <img className='home__image' alt='home market logo' src={redlogo}/>
                <button className='redButton'>
                    <Link to='/log-in'>
                        <FormattedMessage id='user-login'/>
                    </Link>
                </button>
            </section>
        </Fragment>
    );
};

export default UserRegistration;