import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl';
import PurchaseButton from '../elements/purchaseButton';

const Products = (props) => {

    const renderProducts = () => {
        return props.products.map((item, index) => (
            <div className='products__container' key={index}>
                <img className='products__image'
                    alt={item.name}
                    src={`https://github.globant.com/luciana-zavaleta/homemarket-json-server/blob/master/images/products/prod_${item.id}.jpg?raw=true`}/>
                <p>{`$${item.currentPrice}`}</p>
                <p>{item.name}</p>
                <p>{item.refPrice}</p>
                <div>
                    {props.enableFav ? <i onClick={() => props.userAddFavorite(item)} className='fas fa-heart'/> : null}
                    {item.stock > 0 ? <PurchaseButton item={item}/> : <p><FormattedMessage id='no-stock'/></p>}
                </div>
            </div>
        ))
    };

    return (
        <Fragment>
            {renderProducts()}
        </Fragment>
    );
};

export default Products;
