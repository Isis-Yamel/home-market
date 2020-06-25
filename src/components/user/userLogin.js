import React, { Component } from 'react';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Link, Redirect } from 'react-router-dom';

import Password from '../../utils/password';
import { logIn } from '../../store/actions';

import '../../css/styles/userRegistration.scss';

class userLogin extends Component {
    state = {
        user: {
            email: '',
            password: ''
        }
    };

    storeUserInfo (e, propUpdate) {
        this.setState({
            user: {
                ...this.state.user,
                [propUpdate]: e.target.value
            }
        });
    };

    method () {
        if (this.props.auth === true) {
            return <Redirect push to='/catalog'/>
        } else {
            return <p>Por favor ingresa o registrate</p>
        };
    };

    renderLoginForm = () => {
        return (
            <section className='registerSection registration__layout'>
                <fieldset className='fieldsetStyle'>
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
                            <input onChange={(e) => this.storeUserInfo(e, 'email')} className='inputStyle' name='email' required type='email'/>
                        </label>
                        <p>
                            <FormattedMessage id='password'/>*
                        </p>
                        <Password passwordUpdate={(e) => this.storeUserInfo(e, 'password')}/>
                    </form>
                </fieldset>
                <div className='infoLayout'>
                    <p>
                        <Link to='/forgot-password'>
                            <FormattedMessage id='forgot-password'/>
                        </Link>
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
                <button onClick={() => this.props.logIn(this.state.user)} className='redButton'>
                    <FormattedMessage id='user-login'/>
                </button>
                {this.method()}
            </section>
        );
    };

    render () {
        return (this.renderLoginForm());
    };
};

const mapStateToProps = state => {
    return {
        auth: state.auth.isUserAuth
    };
};

export default connect(mapStateToProps, { logIn })(userLogin);