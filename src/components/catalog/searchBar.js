import React, { Component } from 'react'
import { connect } from 'react-redux';
import { onUserSearch } from '../../store/actions';

class SearchBar extends Component {

    state = {
        term: '',
    };

    userSearchInput (e) {
        this.setState({
            term: e.target.value
        })

        this.props.onUserSearch(this.state.term);
    };

    render () {
        return (
            <label className='searchBar__container' htmlFor='search'>
                <input onChange={(e) => this.userSearchInput(e)} className='inputStyle inputStyle__searchBar' placeholder='Buscar' name='search' type='text'/>
            </label>
        );
    };
};

export default connect (null, { onUserSearch })(SearchBar);