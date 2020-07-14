import React, { Component, Fragment } from 'react';
import Loading from '../../elements/loading';
import SliderCarousel from '../../elements/caroussel';
import { FormattedMessage } from 'react-intl';
import { marketInformation, addFavorite, searchBySubCategory } from '../../store/actions';
import { connect } from 'react-redux';
import '../../css/styles/catalogue.scss';
import CatalogueGroup from './catalogueGroup';
import CatalogueProducts from './catalogueProducts';

class Catalogue extends Component {

    state = {
        subcategoryId: null,
        categoryId: null,
        categorySelected: '',
        renderProducts: false,
    };

    componentDidMount () {
        this.props.marketInformation(this.props.token);
    };

    filterByCategory () {
        return this.props.subcategories.filter((groupItem) => {
            if (this.state.categoryId === groupItem.categoryId) {
                return groupItem
            }
        });
    };

    passProducts () {
        if (this.props.search && this.props.term !== '') {
            return this.filterByTerm();
        }
        return this.filterBySubCategory();
    };

    filterBySubCategory () {
        return this.props.products.filter((categoryItem) => {
            if (this.state.subcategoryId === categoryItem.subcategoryId) {
                return categoryItem
            }
        });
    };

    filterByTerm () {
        return this.props.products.filter((categoryItem) => {
            if (categoryItem.name.toLowerCase().includes(this.props.term.toLowerCase())) {
                return categoryItem
            }
        });
    }

    renderSubCategory (category) {
        this.setState({
            ...this.state,
            categorySelected: category.name,
            categoryId: category.id,
            renderProducts: false,
        })
        this.props.searchBySubCategory();
    };

    subCategorySelected = (subcategoryId) => {
        this.setState({
            ...this.state,
            subcategoryId,
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
                groupName={this.state.categorySelected}
                groupCategory={this.filterByCategory()}
                currentCategorySelected={this.subCategorySelected}/>
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
                <SliderCarousel category={this.props.categories} renderSubCategory={this.renderSubCategory.bind(this)}/>
                {this.renderCatalogueProducts()}
            </Fragment>
        );
    };

    render () {
        return (
            <section className='catalogSectionLayout'>
                {this.props.categories.length > 0 ? this.renderSlider() : <Loading/> }
            </section>
        );
    }
};

const mapStateToProps = state => {
    return {
        categories: state.data.categories,
        products: state.data.products,
        search: state.data.doesSearch,
        subcategories: state.data.subcategories,
        term: state.data.searchTerm,
        token: state.data.token,
    };
};

export default connect(
    mapStateToProps,
    {
        addFavorite,
        marketInformation,
        searchBySubCategory,
    })
    (Catalogue);