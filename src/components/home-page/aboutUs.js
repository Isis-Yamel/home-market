import React from 'react';

import { FormattedMessage } from 'react-intl';

const AboutUs = () => {
    return (
        <section className='about__container'>
            <h2 className='heading'>
                <span className='heading__background'>
                    <FormattedMessage id='about-us'/>
                </span>
            </h2>
            <p className='about__paragraph'>
                <FormattedMessage id='about-text'/>
            </p>
        </section>
    );
};

export default AboutUs;