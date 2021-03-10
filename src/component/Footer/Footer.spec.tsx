import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer/Footer';

test('renders footer text', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/Contact us/i);
    expect(footerElement).toBeInTheDocument();
});
