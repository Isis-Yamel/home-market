import React, { Component, Fragment } from 'react';

class Password extends Component {

    state = {
        isPasswordShown: false
    };

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };

    render () {
        const { isPasswordShown } = this.state;
        return (
            <label className='registration__showPass' htmlFor='password'>
                <input className='registration__inputs' name='password' required type={isPasswordShown ? "text" : "password"}/>
                <i className='fa fa-eye registration__eyeIcon' onClick={this.togglePasswordVisiblity}/>
            </label>
        );
    };
};

export default Password;