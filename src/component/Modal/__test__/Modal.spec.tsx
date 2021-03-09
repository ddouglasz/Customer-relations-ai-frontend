import React from 'react';
import { Modal } from '../Modal';
import intents from '../../../data/intents.json'
import { render } from '@testing-library/react';
import jest from 'jest-mock'

const props = {
    title: intents[1].description,
    onClose: jest.fn(),
    open: true
}

describe('Modal', () => {
test('should render opened modal', () => {
    const { getAllByTestId } = render(<Modal {...props}/>);

    expect(getAllByTestId('modal-container').length).toEqual(1);
 });

test('should render close modal button', () => {
    const { getAllByTestId } = render(<Modal {...props}/>);

    expect(getAllByTestId('close-modal-button').length).toEqual(1);
 });
});