import React, { useState } from 'react';
import { menuData } from '../../utils/menuBarData';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions';

import '../../css/styles/menuBar.scss';

const MenuBar = (props) => {

    const [isToggled, setToggled] = useState('false');
    const toggleMenu = () => setToggled(!isToggled);

    const toggleMenuRender = () => {
        if (isToggled === true) {
            return (
                <nav>
                    <ul className='menu__list'>
                        {menuData.map((item, index) => (
                            <div className='menu__element' key={index}>
                                <i className={`${item.icon} menu__icons`}/>
                                <li className='menu__items' >
                                    <NavLink className='menu__items--style' to={item.route}>
                                        <FormattedMessage id={item.label}/>
                                    </NavLink>
                                </li>
                            </div>
                        ))}
                        <div className='menu__element' onClick={() => props.logOut()}>
                            <i className='fas fa-sign-out-alt menu__icons'/>
                            <li className='menu__items'>
                                <NavLink to='/'>
                                    <FormattedMessage id='log-out'/>
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </nav>
            )
        };
    };

    return (
        <section className='menu__container mainSection mainSection__catalog'>
            <div onClick={() => toggleMenu()} className='menu__hamButton'>
                <i className='fas fa-bars'/>
            </div>
            {toggleMenuRender()}
        </section>
    );
};

export default connect(null,{ logOut })(MenuBar);