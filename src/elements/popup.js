import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import '../css/styles/popup.scss';

const Popup = () => {
    return (
        <div className='popup__container'>
            <p>
                <FormattedMessage id='success-sign'/>
            </p>
            <button className='redButton'>
                <Link to='/log-in'>
                    <FormattedMessage id='user-login'/>
                </Link>
            </button>
        </div>
    );
};

export default Popup;