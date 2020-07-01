import React from 'react'

const CatalogueProducts = (props) => {
    const renderProductsByCategories = () => {
        return props.productsByCategory.map((item, index) => (
            <div className='products__container' key={index}>
                <img className='products__image'
                    alt={item.name}
                    src={`https://github.globant.com/luciana-zavaleta/homemarket-json-server/blob/master/images/products/prod_${item.id}.jpg?raw=true`}/>
                <p>{`$${item.currentPrice}`}</p>
                <p>{item.name}</p>
                <p>{item.refPrice}</p>
            </div>
        ))
    };

    return (
        <section className='catalogueCategory__section'>
            <div className='products__section'>
                {renderProductsByCategories()}
            </div>
        </section>
    );
};


export default CatalogueProducts;