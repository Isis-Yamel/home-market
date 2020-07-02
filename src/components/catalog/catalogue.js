import React, { Component, Fragment } from 'react';
import Loading from '../../elements/loading';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FormattedMessage } from 'react-intl';
import { settings } from '../../utils/sliderSettings';
import { categoriesData } from '../../utils/categoriesData';
import { groupInformation, categoriesInformation, productsInformation, addFavorite, searchByCategory } from '../../store/actions';
import { connect } from 'react-redux';
import '../../css/styles/catalogue.scss';

import CatalogueGroup from './catalogueGroup';
import CatalogueProducts from './catalogueProducts';

class Catalogue extends Component {

    state = {
        categoryId: null,
        groupId: null,
        groupSelected: '',
        renderProducts: false,
    };

    componentDidMount () {
        this.props.groupInformation(this.props.token);
        this.props.categoriesInformation(this.props.token);
        this.props.productsInformation(this.props.token);
    };

    filterByGroup () {
        return this.props.categories.filter((groupItem) => {
            if (this.state.groupId === groupItem.groupId) {
                return groupItem
            }
        });
    };

    passProducts () {
        if (this.props.search && this.props.term !== '') {
            return this.filterByTerm();
        }
        return this.filterByCategory();
    };

    filterByCategory () {
        return this.props.products.filter((categoryItem) => {
            if (this.state.categoryId === categoryItem.categoryId) {
                return categoryItem
            }
        });
    };

    filterByTerm () {
        return this.props.products.filter((categoryItem) => {
            console.log(categoryItem, 'here');

            if (categoryItem.name.toLowerCase().includes(this.props.term.toLowerCase())) {
                return categoryItem
            }
        });
    }

    renderCategory (group) {
        this.setState({
            ...this.state,
            groupSelected: group.name,
            groupId: group.id,
            renderProducts: false,
        })
        this.props.searchByCategory();
    };

    categorySelected = (categoryId) => {
        this.setState({
            ...this.state,
            categoryId,
            renderProducts: !this.state.renderProducts,
        })
    };

    renderCatalogueProducts = () => {
        let content = (
            this.state.renderProducts || this.props.search ?
            <CatalogueProducts
                productsByCategory={this.passProducts()}
                userAddFavorite={this.props.addFavorite}/>
            :
            <CatalogueGroup
                renderProducts={this.toggleProducts}
                groupName={this.state.groupSelected}
                groupCategory={this.filterByGroup()}
                currentCategorySelected={this.categorySelected}/>
        )
        return content;
    };

    renderSlider () {
        return (
            <Fragment>
                <h2 className='catalogue__sectionTitle'>
                    <FormattedMessage id='shop-by-cat'/>
                </h2>
                <p className='catalogue__text'>
                    <FormattedMessage id='choose-cat'/>
                </p>
                <Slider className='catalogue__iconsContainer' {...settings}>
                {categoriesData.map((cat, index) => (
                    <div key={index}
                        className='catalogue__iconContainer'
                        onClick={() => this.renderCategory(this.props.group[index])}>
                        <img className='catalogue__iconImage' src={cat.imageSource} alt={cat.areaLabel}/>
                        <p className='catalogue__title'>{this.props.group[index].name}</p>
                    </div>
                ))}
                </Slider>
                {this.renderCatalogueProducts()}
            </Fragment>
        );
    };

    render () {
        return (
            <section className='catalogSectionLayout'>
                {this.props.group.length > 0 ? this.renderSlider() : <Loading/> }
            </section>
        );
    }
};

const mapStateToProps = state => {
    return {
        categories: state.data.categories,
        group: state.data.groups,
        products: state.data.products,
        search: state.data.doesSearch,
        term: state.data.searchTerm,
        token: state.data.token,
    };
};

export default connect(
    mapStateToProps,
    {
        groupInformation,
        categoriesInformation,
        productsInformation,
        addFavorite,
        searchByCategory
    })(Catalogue);