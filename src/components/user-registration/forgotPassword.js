import React from 'react';
import { FormattedMessage } from 'react-intl';

const ForgotPassword = () => {
    return (
        <section className='registerSection registration__layout'>
            <h2>
                <FormattedMessage id='forgot-pass-title'/>
            </h2>
            <p>
                <FormattedMessage id='forgot-pass-text'/>
            </p>
            <fieldset className='registration__fieldset'>
                <legend>Email for password recovery</legend>
                <p>
                    <FormattedMessage id='email'/>*
                </p>
                <label htmlFor='email'>
                    <input className='registration__inputs' name='email' required type='email'/>
                </label>
            </fieldset>
            <button className='redButton'>
                <FormattedMessage id='send'/>
            </button>
        </section>
    );
};

export default ForgotPassword;