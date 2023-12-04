import React from 'react';
import { render, screen } from '@testing-library/react';
import CalculateAverageRating from '.';

describe('CalculateAverageRating Component', () => {
  test('Displays the average rating when ratings have been made', () => {
    render(<CalculateAverageRating inceptionRating={4} matrixRating={3} interstellarRating={5} />);
    const results = screen.getByText('Average Rating: 4.00');
    expect(results).toBeInTheDocument();
  });

  test('Indicates when all movies have a perfect score', () => {
    render(<CalculateAverageRating inceptionRating={5} matrixRating={5} interstellarRating={5} />);
    const results = screen.getByText('All movies have a perfect score!');
    expect(results).toBeInTheDocument();
  });

  test('Displays the correct average rating for various ratings', () => {
    render(<CalculateAverageRating inceptionRating={3} matrixRating={4} interstellarRating={2} />);
    const results = screen.getByText('Average Rating: 3.00');
    expect(results).toBeInTheDocument();
  });

  test('Handles decimal average ratings', () => {
    render(<CalculateAverageRating inceptionRating={2} matrixRating={4} interstellarRating={1} />);
    const results = screen.getByText('Average Rating: 2.33');
    expect(results).toBeInTheDocument();
  });

  test('Does not display the perfect score message for non-perfect scores', () => {
    render(<CalculateAverageRating inceptionRating={4} matrixRating={3} interstellarRating={5} />);
    const perfectScoreMessage = screen.queryByText('All movies have a perfect score!');
    expect(perfectScoreMessage).toBeNull();
  });

  test('Does not display average rating for zero ratings', () => {
    render(<CalculateAverageRating inceptionRating={0} matrixRating={0} interstellarRating={0} />);
    const averageRating = screen.queryByText(/Average Rating:/i);
    expect(averageRating).toBeNull();
  });

  
});