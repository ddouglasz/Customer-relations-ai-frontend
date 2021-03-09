import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../button';

const props = {
    title: '',
    classes: '',
    onclick: jest.fn()
}

test('renders button', () => {
    const { getAllByTestId } = render(<Button {...props} />);
    expect(getAllByTestId('button-container').length).toEqual(1);
});
