import Match, { MatchProps } from '@/components/match/Match';
import data from '../../mock.json';
import { render, screen } from '@testing-library/react';

const allMatches: MatchProps[][] = data.map((league) => league.matches);
const matches = allMatches[0];
const match = matches[0];

describe('Match', () => {
  it('should render players names', () => {
    render(<Match match={match} />);

    const playersNames = screen.getByText('Marc vs Henry');

    expect(playersNames).toBeInTheDocument();
  });

  it('should render match score', () => {
    render(<Match match={match} />);

    const score = screen.getByText('9-7');

    expect(score).toBeInTheDocument();
  });
});
