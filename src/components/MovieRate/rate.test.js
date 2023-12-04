import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieRating from './MovieRating';

describe('MovieRating Component', () => {
  test('renders component with movie posters and input fields', () => {
    render(<MovieRating name="John" />);

    expect(screen.getByText(/Welcome John!/i)).toBeInTheDocument();

    expect(screen.getAllByAltText(/Movie \d Poster/i)).toHaveLength(3);

    expect(screen.getAllByLabelText(/Rate Movie \d:/i)).toHaveLength(3);
  });

  test('updates movie ratings correctly when user interacts with input fields', () => {
    render(<MovieRating name="John" />);

    fireEvent.change(screen.getByLabelText(/Rate Movie 1:/i), { target: { value: '4' } });
    expect(screen.getByText(/Rating: 4/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Rate Movie 2:/i), { target: { value: '3' } });
    expect(screen.getByText(/Rating: 3/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Rate Movie 3:/i), { target: { value: '5' } });
    expect(screen.getByText(/Rating: 5/i)).toBeInTheDocument();
  });

  test('calls rateMovie function with correct arguments when user interacts with input fields', () => {
    const mockRateMovie = jest.fn();
    render(<MovieRating name="John" rateMovie={mockRateMovie} />);

    fireEvent.change(screen.getByLabelText(/Rate Movie 1:/i), { target: { value: '4' } });
    expect(mockRateMovie).toHaveBeenCalledWith(1, 4);

    fireEvent.change(screen.getByLabelText(/Rate Movie 2:/i), { target: { value: '3' } });
    expect(mockRateMovie).toHaveBeenCalledWith(2, 3);

    fireEvent.change(screen.getByLabelText(/Rate Movie 3:/i), { target: { value: '5' } });
    expect(mockRateMovie).toHaveBeenCalledWith(3, 5);
  });
});
