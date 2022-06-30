import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DieThrowingGameComponent from './DieThrowingGameComponent';


test('renders correctly', () => {
    let component;
    expect(component).toBeFalsy();
    component = render(<DieThrowingGameComponent />);
    expect(component).toBeTruthy();
});

test('component includes heading/field label', () => {
    render(<DieThrowingGameComponent />);
    const linkElement = screen.getByText(/Number of times to throw the die/i);
    expect(linkElement).toBeInTheDocument();
});

test('component includes button', () => {
    let component = render(<DieThrowingGameComponent />);
    const button = component.container.querySelector('#submit-btn');
    expect(button).toBeInTheDocument();
});

test('component includes form/field', () => {
    let component = render(<DieThrowingGameComponent />);
    const inputField = component.container.querySelector('#user-input');
    expect(inputField).toBeInTheDocument();
});