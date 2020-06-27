import React, { Component } from 'react';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Link, Redirect } from 'react-router-dom';

import Password from '../../elements/password';
import { logIn } from '../../store/actions';

import '../../css/styles/userRegistration.scss';

class userLogin extends Component {
    state = {
        email: '',
        password: ''
    };

    handleUser = ({target}) => {
        this.setState({ [target.name]: target.value })
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
                            <input
                                className='inputStyle'
                                name='email'
                                type='email' required
                                value={this.state.email}
                                onChange={this.handleUser}/>
                        </label>
                        <p>
                            <FormattedMessage id='password'/>*
                        </p>
                        <Password value={this.state.password} storePassword={this.handleUser}/>
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
                <button onClick={() => this.props.logIn(this.state)} className='redButton'>
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
        auth: state.data.isUserAuth
    };
};

export default connect(mapStateToProps, { logIn })(userLogin);