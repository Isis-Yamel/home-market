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
            <fieldset className='fieldsetStyle'>
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
                        <input className='inputStyle' name='name' type='text' required/>
                    </label>
                    <p>
                        <FormattedMessage id='phone'/>*
                    </p>
                    <label htmlFor='phone'>
                        <input className='inputStyle' name='phone' type='numeric' required/>
                    </label>
                    <p>
                        <FormattedMessage id='email'/>*
                    </p>
                    <label htmlFor='email'>
                        <input className='inputStyle' name='email' required type='email'/>
                    </label>
                    <p>
                        <FormattedMessage id='password'/>*
                    </p>
                    <Password/>
                </form>
            </fieldset>
            <div className='infoLayout'>
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