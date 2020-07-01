import React, { useState, Fragment } from 'react'

import '../css/styles/switchToggle.scss';

const SwitchToggle = (props) => {

    const [isToggled, setToggled] = useState('false');
    const toggleLang = () => setToggled(!isToggled);

    const renderToggle = () => {
        return (
            <section className='toggle__container'>
                <p>SPA</p>
                <label onClick={() => props.setLocale((isToggled) ? props.eng : props.spa)} className='toggle__contain'>
                    <input className='toggle__input' type='checkbox' onClick={() => toggleLang()}/>
                    <div className='toggle__slidebar'></div>
                </label>
                <p>ENG</p>
            </section>
        );
    };

    return (
        <Fragment>
            {renderToggle()}
        </Fragment>
    );
};

export default SwitchToggle;
