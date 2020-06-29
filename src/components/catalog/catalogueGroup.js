import React from 'react'

const CatalogueGroup = (props) => {
    const renderGroupCategories = () => {
        if (props.groupCategory.length > 0) {
            return props.groupCategory.map((item, index) => (
                <div key={index} className='catalogueCategory__item '>
                    <img className='catalogueCategory__itemImage' src={`https://github.globant.com/luciana-zavaleta/homemarket-json-server/blob/master/images/categories/cat_${item.id}.jpg?raw=true`}/>
                    <p>{item.name}</p>
                </div>
            ))
        }
    };

    return (
        <section className='catalogueCategory__section'>
            <h2 className='catalogueCategory__title'>{props.groupName}</h2>
            <div className='catalogueCategory__container'>
                {renderGroupCategories()}
            </div>
        </section>
    );
};


export default CatalogueGroup;