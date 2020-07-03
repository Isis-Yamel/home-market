import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { purchasesList } from '../store/actions';

class PurchaseButton extends Component {

    state = {counter: 0};

    addProduct () {this.setState({...this.state, counter: this.state.counter + 1})};
    substractProduct () {this.setState({...this.state, counter: this.state.counter - 1})};

    // preventNegativeValues () {this.state.counter}

    purchaseHandler (item) {
        if (this.state.counter > 0) {
            return this.props.purchasesList({item, counter:this.state.counter})
        } else {
            return null
        }
    };

    render () {
        return (
            <Fragment>
                <button onClick={() => this.substractProduct()}>
                    <FormattedMessage id='substract-product'/>
                </button>
                <button onClick={() => this.purchaseHandler(this.props.item)}>
                    <FormattedMessage id='buy-product'/>
                </button>
                <button onClick={() => this.addProduct()}>
                    <FormattedMessage id='add-product'/>
                </button>
            </Fragment>
        );
    };
};

export default connect(null, { purchasesList })(PurchaseButton);
