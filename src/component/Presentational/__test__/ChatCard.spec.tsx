import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChatCard } from '../ChatCard';

test('renders chat text', () => {
    render(<ChatCard isBotResponse={true} text={'Hello'} />);
    const chatElement = screen.getByText(/hello/i);
    expect(chatElement).toBeInTheDocument();
});
