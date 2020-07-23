import React, { Component } from 'react';

class Password extends Component {

    state = {
        isPasswordShown: false
    };

    togglePasswordVisiblity = () => {
        this.setState({ isPasswordShown: !this.state.isPasswordShown });
    };

    render () {
        return (
            <label className='registration__showPass' htmlFor='password'>
                <input
                    value={this.props.value}
                    onChange={this.props.storePassword}
                    className='inputStyle'
                    name='password'
                    required
                    type={this.state.isPasswordShown ? "text" : "password"}/>
                <i className='fa fa-eye registration__eyeIcon' onClick={this.togglePasswordVisiblity}/>
            </label>
        );
    };
};

export default Password;