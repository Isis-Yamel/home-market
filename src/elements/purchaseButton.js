import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { addCart, removeFromCart } from '../store/actions';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

class PurchaseButton extends Component {

    state = {counter: 0};

    addProduct () {
        this.setState({...this.state, counter: this.state.counter + 1});
        this.cartAddWarning(this.props.item.name);
    };

    substractProduct () {
        if(this.state.counter > 0) {
            this.setState({...this.state, counter: this.state.counter - 1});
            this.props.removeFromCart(this.props.item.id);
            this.cartRemoveWarning(this.props.item.name)
        } else if (this.state.counter === 0) {
            this.setState({...this.state, counter: 0})
        }
    };

    purchaseHandler (item) {
        if (this.state.counter > 0) {
            return this.props.addCart({item, counter:this.state.counter})
        } else {
            return null
        }
    };

    cartAddWarning = (name) => {
        toast(`You have added ${name}to your cart`, {position: toast.POSITION.TOP_CENTER});
    };

    cartRemoveWarning = (name) => {
        toast(`You have removed ${name}to your cart`, {position: toast.POSITION.TOP_CENTER});
    };

    render () {
        return (
            <div className='products__buttonPurchasesContainer'>
                <button className='products__buttonPurchases' onClick={() => this.substractProduct()}>
                    <FormattedMessage id='substract-product'/>
                </button>
                <button className='products__buttonPurchases' onClick={() => this.purchaseHandler(this.props.item)}>
                    {this.state.counter === 0 ? <FormattedMessage id='buy-product'/> : `Comprar ${this.state.counter}`}
                </button>
                <button className='products__buttonPurchases' onClick={() => this.addProduct()}>
                    <FormattedMessage id='add-product'/>
                </button>
                <ToastContainer autoClose={3000}/>
            </div>
        );
    };
};

export default connect(null, { addCart, removeFromCart })(PurchaseButton);
