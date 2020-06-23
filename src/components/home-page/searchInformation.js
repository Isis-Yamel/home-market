import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import barCodeIcon from '../../assets/barcode-icon.png';
import micIcon from '../../assets/mic-icon.png';

const SearchInfo = () => {
    return (
        <section className='search__container'>
            <h2 className='heading search__title'>
                <span className='heading__background'>
                    <FormattedMessage id='search-title'/>
                </span>
            </h2>
            <section className='search__layout'>
                <div className='search__elements'>
                    <img className='search__image' src={micIcon} alt='audio search'/>
                    <p>
                        <FormattedMessage id='audio-search'/>
                    </p>
                </div>
                <div className='search__elements'>
                    <img className='search__image' src={barCodeIcon} alt='bar code search'/>
                    <p>
                        <FormattedMessage id='search-bar-code'/>
                    </p>
                </div>
            </section>
        </section>
    );
};

export default SearchInfo;