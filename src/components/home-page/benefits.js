import React, { Fragment } from 'react';
import { benefitsInfo } from '../../utils/benefitsInformation';
import { FormattedMessage } from 'react-intl';

const renderBenefits = () => {
    return (
        <Fragment>
            {benefitsInfo.map((benefit, index) => {
                return (
                    <article className='benefit__elements' key={index}>
                        <img src={`${benefit.imageSource}`} alt={`${benefit.areaLabel}`}/>
                        <h3 className='benefit__title'>
                            <FormattedMessage id={`${benefit.title}`}/>
                        </h3>
                        <p>
                            <FormattedMessage id={`${benefit.text}`}/>
                        </p>
                    </article>
                );
            })}
        </Fragment>
    );
};

const Benefits = () => {
    return (
        <section className='benefit__container'>
            {renderBenefits()}
        </section>
    );
};

export default Benefits;