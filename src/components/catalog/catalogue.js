import React, { Component } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { categoriesData } from '../../utils/categoriesData';
import { groupInformation } from '../../store/actions';
import { connect } from 'react-redux';
import '../../css/styles/catalogue.scss';
class Catalogue extends Component {

    componentDidMount () {
        this.props.groupInformation(this.props.token);
    };

    render () {
        console.log(this.props);

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            responsive: [
                {
                  breakpoint: 1920,
                  settings: {
                    slidesToShow: 7,
                    dots: false
                  }
                },
                {
                  breakpoint: 1080,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                }
            ]
        };
        return (
            <section className='catalogSectionLayout'>
                <Slider className='catalogue__iconsContainer' {...settings}>
                    {categoriesData.map((cat, index) => (
                        <div key={index} className='catalogue__iconContainer'>
                            <img className='catalogue__iconImage' src={cat.imageSource} alt={cat.areaLabel}/>
                        </div>
                    ))}
                </Slider>
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