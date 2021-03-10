import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header/Header';

test('renders hero text', () => {
    render(<Header />);
    const HeroTextElement = screen.getByText(/Explore some of our smart conversations/i);
    expect(HeroTextElement).toBeInTheDocument();
});
