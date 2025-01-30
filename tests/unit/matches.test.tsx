import Matches from '@/components/matches/Matches';
import { render, screen } from '@testing-library/react';

describe('Matches', () => {
  it('should render matches header', () => {
    render(<Matches />);

    const matchesHeading = screen.getByRole('heading', { level: 2 });

    expect(matchesHeading).toHaveTextContent('Partidos');
  });

  it('should render matches list', () => {
    render(<Matches />);

    const playersList = screen.getByRole('list');

    expect(playersList).toBeInTheDocument();
  });

  it('should render players names', () => {
    render(<Matches />);

    const playersNames = screen.getByText('Marc vs Henry');

    expect(playersNames).toBeInTheDocument();
  });
});
