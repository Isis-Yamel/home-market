import React from 'react'

const CatalogueGroup = (props) => {
    const renderGroupCategories = () => {
        return props.groupCategory.map((item, index) => (
            <div key={index} className='catalogueCategory__item' onClick={() => props.currentCategorySelected(item.id)}>
                <img alt={item.name} className='catalogueCategory__itemImage' src={`https://github.globant.com/luciana-zavaleta/homemarket-json-server/blob/master/images/categories/cat_${item.id}.jpg?raw=true`}/>
                <h3 className='catalogueCategory__itemTitle'>{item.name}</h3>
            </div>
        ))
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