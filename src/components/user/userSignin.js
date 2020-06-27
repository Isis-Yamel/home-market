import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Password from '../../elements/password';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions';

class userSignin extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        password: '',
    };

    handleNewUser = ({target}) => {
        this.setState({ [target.name]: target.value })
    };

    renderSigninForm = () => {
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
                            <input
                                className='inputStyle'
                                name='name'
                                type='text'required
                                value={this.state.name}
                                onChange={this.handleNewUser}/>
                        </label>
                        <p>
                            <FormattedMessage id='phone'/>*
                        </p>
                        <label htmlFor='phone'>
                            <input
                                className='inputStyle'
                                name='phone'
                                type='numeric' required
                                value={this.state.phone}
                                onChange={this.handleNewUser}/>
                        </label>
                        <p>
                            <FormattedMessage id='email'/>*
                        </p>
                        <label htmlFor='email'>
                            <input
                                className='inputStyle'
                                name='email'
                                type='email'required
                                value={this.state.email}
                                onChange={this.handleNewUser}/>
                        </label>
                        <p>
                            <FormattedMessage id='password'/>*
                        </p>
                        <Password value={this.state.password} storePassword={this.handleNewUser}/>
                    </form>
                </fieldset>
                <div className='infoLayout'>
                    <button className='whiteButton'>
                        <Link to='/'>
                            <FormattedMessage id='cancel'/>
                        </Link>
                    </button>
                    <button onClick={() => this.props.signIn(this.state)} className='redButton'>
                        <FormattedMessage id='sign-in'/>
                    </button>
                </div>
            </section>
        );
    };

    render () {
        return (this.renderSigninForm());
    };
};

export default connect(null, { signIn })(userSignin);

