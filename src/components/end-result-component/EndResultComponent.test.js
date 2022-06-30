import * as React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import EndResultComponent from './EndResultComponent';


test('renders correctly', () => {
    let component;
    expect(component).toBeFalsy();
    component = render(<EndResultComponent />);
    expect(component).toBeTruthy();
});
