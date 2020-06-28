import React, { Component, Fragment, PureComponent } from 'react';
import Loading from '../../elements/loading';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from '../../utils/sliderSettings';
import { categoriesData } from '../../utils/categoriesData';
import { groupInformation } from '../../store/actions';
import { connect } from 'react-redux';
import '../../css/styles/catalogue.scss';

class Catalogue extends Component {

    componentDidMount () {
        this.props.groupInformation(this.props.token)
    };

    renderSlider () {
        return (
            <Slider className='catalogue__iconsContainer' {...settings}>
            {categoriesData.map((cat, index) => (
                <div key={index} className='catalogue__iconContainer'>
                    <img className='catalogue__iconImage' src={cat.imageSource} alt={cat.areaLabel}/>
                    <p className='catalogue__title'>{this.props.group[index].name}</p>
                </div>
            ))}
            </Slider>
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
        group: state.data.groups
    };
};


export default connect(mapStateToProps, { groupInformation })(Catalogue);