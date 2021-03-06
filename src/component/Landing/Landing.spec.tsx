import React from 'react';
import { render } from '@testing-library/react';
import { Landing } from './Landing';


test('renders landing component', () => {
    const { getAllByTestId } =  render(<Landing />);
    expect(getAllByTestId('intent-container').length).toEqual(1);
});
