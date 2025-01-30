import Matches from '@/components/matches/Matches';
import { render, screen } from '@testing-library/react';

describe('Matches', () => {
  it('should render matches header', () => {
    render(<Matches />);

    const matchesHeading = screen.getByRole('heading', { level: 2 });

    expect(matchesHeading).toHaveTextContent('Partidos');
  });
});
