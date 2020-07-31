import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { MemoryRouter, Route } from 'react-router-dom';
import Routes, { Profile, Catalogue, UserFavorites} from '../../components/catalog/menu';

import Menu from '../../components/catalog/menu';
import MenuBar from '../../components/catalog/menuBar';
import OnPurchase from '../../components/purchase/onPurchase';
import SearchBar from '../../components/catalog/searchBar';

configure({ adapter: new Adapter() });

const mockStore = configureStore();
const store = mockStore({ auth: true, cart: [] });

describe('Main menu when authenticated', () => {
    let wrapper;
    let pathMap = {};

    beforeEach(() => {
        wrapper = shallow(
            <Provider store={store}>
                <MemoryRouter initialEntries={[ '/' ]}>
                    <Menu />
                    <Routes/>
                </MemoryRouter>
            </Provider>
        );

        pathMap = wrapper.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
        }, {});
    })

    it('should render menu bar component', () => {
        expect(wrapper.find(MenuBar));
    });

    it('should render search bar component', () => {
        expect(wrapper.find(SearchBar));
    });

    it('should render purchase cart component', () => {
        expect(wrapper.find(OnPurchase));
    });

    it('should contain my profile route', () => {
        expect(pathMap['/']).toBe(Profile);
    });

    it('should contain my catalogue route', () => {
        expect(pathMap['/']).toBe(Catalogue);
    });

    it('should contain my user favorite route', () => {
        expect(pathMap['/']).toBe(UserFavorites);
    });
});
