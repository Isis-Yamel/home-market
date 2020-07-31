import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AboutUs from '../../components/home-page/aboutUs';
import Benefits from '../../components/home-page/benefits';
import Home from '../../components/home-page/home';
import SearchInfo from '../../components/home-page/searchInformation';
import UserRegistration from '../../components/home-page/userRegister'

configure({adapter: new Adapter()})

describe('Home page', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home/>);
    });

    it('should render user registration component on home page', () => {
        expect(wrapper.find(UserRegistration));
    });

    it('should render about us component on home page', () => {
        expect(wrapper.find(AboutUs));
    });

    it('should render benefits component on home page', () => {
        expect(wrapper.find(Benefits));
    });

    it('should render search information component on home page', () => {
        expect(wrapper.find(SearchInfo));
    });
});
