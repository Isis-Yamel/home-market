import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import Products from '../common/products';
import { FormattedMessage } from 'react-intl';
import '../../css/styles/products.scss';

const UserFavorites = (props) => {

    const renderFavoriteHead = () => {
        return (
            <Fragment>
                <h2 className='fav__title'>
                    <FormattedMessage id='favorite-title'/>
                </h2>
                <p>
                    <FormattedMessage id='favorite-text'/>
                </p>
            </Fragment>
        );
    };

    return (
        <section className='catalogSectionLayout fav__container'>
            {renderFavoriteHead()}
            <div className='products__section'>
                <Products products={props.favorites} enableFav={false}/>
            </div>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        favorites: state.favorite.favorites,
    };
};

export default connect(mapStateToProps, null)(UserFavorites);
