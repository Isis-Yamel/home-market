import React, { Component } from 'react';
import { categoriesData } from '../../utils/categoriesData';
import { groupInformation } from '../../store/actions';
import { connect } from 'react-redux';
import '../../css/styles/catalogue.scss';

class Catalogue extends Component {

    componentDidMount () {
        this.props.groupInformation();
    };

    renderCategories = () => {
        return (
            <section className='catalogue__iconsContainer'>
                {categoriesData.map((cat) => (
                    <div className='catalogue__iconContainer'>
                        <img className='catalogue__iconImage' src={cat.imageSource} alt={cat.areaLabel}/>
                    </div>
                ))}
            </section>
        );
    };

    render () {
        return (
            <section className='catalogSectionLayout'>
                <p>Here will be the icons c:</p>
                {this.renderCategories()}
            </section>
        );
    }
};

export default connect(null, { groupInformation })(Catalogue);