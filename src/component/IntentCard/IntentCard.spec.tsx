import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntentCard } from './IntentCard';
import intents from '../../data/intents.json'
import jest from 'jest-mock'

const props = {
    intentsData: intents,
    onClickIntentDetails: jest.fn(),
}

test('renders intent component', () => {
    const { getAllByTestId } = render(<IntentCard {...props} />);
    expect(getAllByTestId('intent-container').length).toEqual(1);
});
