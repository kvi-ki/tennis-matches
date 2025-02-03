import { MatchProps } from '@/components/match/Match';
import Matches from '@/components/matches/Matches';
import data from '../../mock.json';
import { render, screen } from '@testing-library/react';

const allMatches: MatchProps[][] = data.map((league) => league.matches);
const matches = allMatches[0];

describe('Matches', () => {
  it('should render matches header', () => {
    render(<Matches matches={matches} setMatchesScores={() => {}} />);

    const matchesHeading = screen.getByRole('heading', { level: 2 });

    expect(matchesHeading).toHaveTextContent('Partidos');
  });

  it('should render matches list', () => {
    render(<Matches matches={matches} setMatchesScores={() => {}} />);

    const playersList = screen.getAllByRole('listitem');

    expect(playersList).toHaveLength(2);
  });
});
