import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../css/styles/footer.scss';

const Footer = () => {
    return (
        <footer className='footer__layout'>
            <div className='footer__icons'>
                <i className='fab fa-twitter-square'/>
                <i className='fab fa-facebook-square'/>
                <i className='fab fa-instagram-square'/>
                <i className='fab fa-google-plus-square'/>
            </div>
            <p className='footer__text'>
                <FormattedMessage id='footer-message'/>
            </p>
        </footer>
    );
};

export default Footer;