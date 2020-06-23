import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Password from '../../utils/password';

import '../../css/styles/userRegistration.scss';

class userLogin extends Component {
    render () {
        return (renderLoginForm());
    };
};

const renderLoginForm = () => {
    return (
        <section className='registerSection registration__layout'>
            <fieldset className='registration__fieldset'>
                <legend className='registration__legend'>
                    <h3>
                        <FormattedMessage id='welcome'/>
                    </h3>
                </legend>
                <form className='registration__form'>
                    <p>
                        <FormattedMessage id='email'/>*
                    </p>
                    <label htmlFor='email'>
                        <input className='registration__inputs' name='email' required type='email'/>
                    </label>
                    <p>
                        <FormattedMessage id='password'/>*
                    </p>
                    <Password/>
                </form>
            </fieldset>
            <div className='registration__information'>
                <p>
                    <FormattedMessage id='forgot-password'/>
                </p>
                <p className='registration__text'>
                    <FormattedMessage id='new-user'/>
                    <Link to='/sig-in'>
                        <span className='registration__text--color'>
                            <FormattedMessage id='free-registration'/>
                        </span>
                    </Link>
                </p>
            </div>
            <button className='redButton'>
                <FormattedMessage id='user-login'/>
            </button>
        </section>
    );
};

export default userLogin;