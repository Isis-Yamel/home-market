import React from 'react';
import Products from '../../elements/products';

const CatalogueProducts = (props) => {
    return (
        <section className='catalogueCategory__section'>
            <div className='products__section'>
                <Products products={props.productsByCategory} enableFav={true} userAddFavorite={props.userAddFavorite}/>
            </div>
        </section>
    );
};

export default CatalogueProducts;