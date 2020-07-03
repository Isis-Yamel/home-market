import React from 'react';
import { FormattedMessage } from 'react-intl';

const ForgotPassword = () => {
    return (
        <section className='mainSection registration__layout'>
            <h2>
                <FormattedMessage id='forgot-pass-title'/>
            </h2>
            <p>
                <FormattedMessage id='forgot-pass-text'/>
            </p>
            <fieldset className='fieldsetStyle'>
                <legend>
                    <p>
                        <FormattedMessage id='email'/>*
                    </p>
                </legend>
                <label htmlFor='email'>
                    <input className='inputStyle' name='email' required type='email'/>
                </label>
            </fieldset>
            <button className='redButton'>
                <FormattedMessage id='send'/>
            </button>
        </section>
    );
};

export default ForgotPassword;