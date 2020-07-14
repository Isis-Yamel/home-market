import React from 'react';
import { categoriesData } from '../utils/categoriesData';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from '../utils/sliderSettings';

const SliderCarousel = (props) => {
    return (
        <Slider className='catalogue__iconsContainer' {...settings}>
            {categoriesData.map((cat, index) => (
                <div key={index}
                    className='catalogue__iconContainer'
                    onClick={() => props.renderSubCategory(props.category[index])}>
                    <img className='catalogue__iconImage' src={cat.imageSource} alt={cat.areaLabel}/>
                    <p className='catalogue__title'>{props.category[index].name}</p>
                </div>
            ))}
        </Slider>
    );
};

export default SliderCarousel;