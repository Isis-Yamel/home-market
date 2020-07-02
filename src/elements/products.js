import React, { Fragment } from 'react'

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
                {props.enableFav ? <i onClick={() => props.userAddFavorite(item)} className='fas fa-heart'/> : null}
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
