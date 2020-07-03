import React, { useState } from 'react';
import { connect } from 'react-redux';
import PurchaseButton from '../../elements/purchaseButton';
import '../../css/styles/purchase.scss';

const OnPurchase = (props) => {

    const [isToggled, setToggled] = useState('false');
    const toggleCart = () => setToggled(!isToggled);

    const toggleCartRender = () => {
        if (isToggled === true && props.cart.length > 0) {
            return (
                <nav className='cart__list'>
                    <ul className='cart__style'>
                        {props.cart.map((cart, index) => (
                            <div key={index}>
                                <img
                                    className='cart__image'
                                    alt={cart.item.name}
                                    src={`https://github.globant.com/luciana-zavaleta/homemarket-json-server/blob/master/images/products/prod_${cart.item.id}.jpg?raw=true`}/>
                                <li className='menu__items' >
                                    <p>{cart.item.name}</p>
                                    <PurchaseButton/>
                                    <p>{cart.item.currentPrice}</p>
                                </li>
                            </div>
                        ))}
                    </ul>
                </nav>
            );
        } else if (isToggled === true && props.cart.length === 0) {
            return (
            <nav className='cart__list'>
                <ul className='cart__style'>
                    <li className='menu__items'>No hay elementos en tu carrito</li>
                </ul>
            </nav>
            )
        }
    };

    return (
        <section className='cart__container'>
            <div onClick={() => toggleCart()}>
                <i className='fas fa-shopping-cart cart__button'/>
            </div>
            {toggleCartRender()}
        </section>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.data.cart,
    };
};

export default connect(mapStateToProps, null)(OnPurchase);