import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Password from '../../utils/password';

class userSignin extends Component {
    render () {
        return (renderSigninForm());
    };
};

const renderSigninForm = () => {
    return (
        <section className='registerSection registration__layout'>
            <fieldset className='registration__fieldset'>
                <legend className='registration__legend'>
                    <h3>
                        <FormattedMessage id='sign-in'/>
                    </h3>
                </legend>
                <form>
                    <p>
                        <FormattedMessage id='name-lastname'/>*
                    </p>
                    <label htmlFor='name'>
                        <input className='registration__inputs' name='name' type='text' required/>
                    </label>
                    <p>
                        <FormattedMessage id='phone'/>*
                    </p>
                    <label htmlFor='phone'>
                        <input className='registration__inputs' name='phone' type='numeric' required/>
                    </label>
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
                <button className='whiteButton'>
                    <Link to='/'>
                        <FormattedMessage id='cancel'/>
                    </Link>
                </button>
                <button className='redButton'>
                    <FormattedMessage id='sign-in'/>
                </button>
            </div>
        </section>
    );
};

export default userSignin;