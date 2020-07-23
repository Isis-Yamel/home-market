import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl';
import PurchaseButton from './purchaseButton';
import '../../css/styles/products.scss';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Products = (props) => {

    const favoriteWarning = (name) => {
        toast(`You have added ${name}to your favorites`, {position: toast.POSITION.TOP_CENTER});
    };

    function favoriteHandler(item) {
        props.userAddFavorite(item);
        favoriteWarning(item.name);
    };

    const renderProducts = () => {
        return props.products.map((item, index) => (
            <div className='products__container' key={index}>
                <img className='products__image'
                    alt={item.name}
                    src={`https://github.com//Isis-Yamel/json-server/blob/master/images/products/prod_${item.id}.jpg?raw=true`}/>
                <p>{`$${item.currentPrice}`}</p>
                <p>{item.name}</p>
                <p>{item.refPrice}</p>
                <div className='products__buttonsContainer'>
                    {props.enableFav ? <i onClick={() => favoriteHandler(item)} className='fas fa-heart products__buttonFavorite'/> : null}
                    {item.stock > 0 ? <PurchaseButton item={item}/> : <p><FormattedMessage id='no-stock'/></p>}
                </div>
            </div>
        ))
    };

    return (
        <Fragment>
            <ToastContainer autoClose={3000}/>
            {renderProducts()}
        </Fragment>
    );
};

export default Products;
