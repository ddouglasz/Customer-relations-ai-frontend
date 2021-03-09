import React from 'react';
import { render, screen } from '@testing-library/react';
import { Landing } from '../Landing';


test('render landing component', () => {
    const { getAllByTestId } =  render(<Landing />);
    expect(getAllByTestId('landing-container').length).toEqual(1);
});
