import React from 'react';
import { render, screen } from '@testing-library/react';
import { Intent } from '../Intent';
import intents from '../../../data/intents.json'
import jest from 'jest-mock'

const props = {
    intentsData: intents[1],
    onClickIntentDetails: jest.fn(),
}

test('renders intent component', () => {
    const { getAllByTestId } = render(<Intent {...props} />);
    expect(getAllByTestId('intent-container').length).toEqual(1);
});
