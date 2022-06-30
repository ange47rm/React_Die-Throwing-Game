import * as React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import DieThrowingGameContainer from '../../containers/die-throwing-game-container/DieThrowingGameContainer';

it('renders correctly', () => {
    let component;
    expect(component).toBeFalsy();
    component = render(<DieThrowingGameContainer />);
    expect(component).toBeTruthy();
})
