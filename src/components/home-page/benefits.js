import React, { Fragment } from 'react';
import payAtHome from '../../assets/pagas-en-casa.png';
import freeDelivery from '../../assets/entrega-gratis.png';
import freshProducts from '../../assets/productos-frescos.png';
import cookRecipes from '../../assets/recetas-de-cocina.png';

import { FormattedMessage } from 'react-intl';

const Benefits = () => {

    const renderBenefits = () => {
        return (
            <Fragment>
                <article className='benefit__elements'>
                    <img src={payAtHome}/>
                    <h3>
                        <FormattedMessage id='pay-at-home'/>
                    </h3>
                    <p>
                        <FormattedMessage id='pay-text'/>
                    </p>
                </article>
                <article className='benefit__elements'>
                    <img src={freeDelivery}/>
                    <h3>
                        <FormattedMessage id='free-delivery'/>
                    </h3>
                    <p>
                        <FormattedMessage id='free-text'/>
                    </p>
                </article>
                <article className='benefit__elements'>
                    <img src={freshProducts}/>
                    <h3>
                        <FormattedMessage id='fresh-products'/>
                    </h3>
                    <p>
                        <FormattedMessage id='fresh-text'/>
                    </p>
                </article>
                <article className='benefit__elements'>
                    <img src={cookRecipes}/>
                    <h3>
                        <FormattedMessage id='cook-recipes'/>
                    </h3>
                    <p>
                        <FormattedMessage id='cook-text'/>
                    </p>
                </article>
            </Fragment>
        );
    };

    return (
        <section className='benefit__container'>
            {renderBenefits()}
        </section>
    );
};

export default Benefits;