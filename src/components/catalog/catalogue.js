import React, { Component, Fragment } from 'react';
import Loading from '../../elements/loading';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FormattedMessage } from 'react-intl';
import { settings } from '../../utils/sliderSettings';
import { categoriesData } from '../../utils/categoriesData';
import { groupInformation, categoriesInformation } from '../../store/actions';
import { connect } from 'react-redux';
import '../../css/styles/catalogue.scss';

import CatalogueGroup from './catalogueGroup';

class Catalogue extends Component {

    state = {
        groupId: null,
        groupSelected: '',
    };

    componentDidMount () {
        this.props.groupInformation(this.props.token);
        this.props.categoriesInformation(this.props.token);
    };

    filterByCategory () {
        return this.props.categories.filter((categoryItem) => {
            if (this.state.groupId === categoryItem.groupId) {
                return categoryItem
            }
        });
    };

    renderCategory (group, category) {
        this.setState({
            groupSelected: group.name,
            groupId: group.id
        })
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
                    <div key={index} className='catalogue__iconContainer' onClick={() => this.renderCategory(this.props.group[index])}>
                        <img className='catalogue__iconImage' src={cat.imageSource} alt={cat.areaLabel}/>
                        <p className='catalogue__title'>{this.props.group[index].name}</p>
                    </div>
                ))}
                </Slider>
                <CatalogueGroup
                    groupName={this.state.groupSelected}
                    groupCategory={this.filterByCategory()}/>
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
        token: state.data.token,
        group: state.data.groups,
        categories: state.data.categories,
    };
};

export default connect(mapStateToProps, { groupInformation, categoriesInformation })(Catalogue);