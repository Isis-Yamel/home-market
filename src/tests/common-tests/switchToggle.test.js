import React from 'react';

import {renderHook } from '@testing-library/react-hooks'
import ReactTestUtils from 'react-dom/test-utils';
import { getByRole } from '@testing-library/dom';
import { screen } from '@testing-library/react';

import SwitchToggle from '../../components/common/switchToggle';

describe('switch toggle common component', () => {
    const { result } = renderHook(() => SwitchToggle());

    it('should render component initial state in false', () => {
        expect(result.current.isToggled).toBeFalsy();
        ReactTestUtils.Simulate.click('input')
        // expect(screen.getByRole('input')).toHaveBeenCalled();
    });
});
