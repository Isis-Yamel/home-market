import React, { useState } from 'react';
import { menuData } from '../../utils/menuBarData';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import '../../css/styles/menuBar.scss';
import Catalogue from './catalogue';

const MenuBar = () => {
    const [isToggled, setToggled] = useState('false');

    const toggleMenu = () => setToggled(!isToggled);

    const toggleMenuRender = () => {
        if (isToggled === true) {
            return (
                <nav>
                    <ul className='menu__list'>
                        {menuData.map((item, index) => (
                            <div className='menu__element'>
                                <i className={`${item.icon} menu__icons`}/>
                                <li className='menu__items' key={index}>
                                    <NavLink className='menu__items--style' to={item.route}>
                                        <FormattedMessage id={item.label}/>
                                    </NavLink>
                                </li>
                            </div>
                        ))}
                    </ul>
                </nav>
            )
        };
    };

    return (
        <section className='menu__container registerSection registerSection__catalog'>
            <div onClick={() => toggleMenu()} className='menu__hamButton'>
                <i className='fas fa-bars'/>
            </div>
            {toggleMenuRender()}
            <Catalogue/>
        </section>
    );
};

export default MenuBar;