import { render, screen } from '@testing-library/react';
import Player, { PlayerProps } from '@/components/player/Player';
import { MatchScoreProps } from '@/components/match/Match';

describe('Player', () => {
  const playersData: PlayerProps[] = [
    {
      name: 'Marc',
      pj: 3,
      pg: 2,
      pp: 1,
      jf: 12,
      jc: 7,
      dif: 5
    },
    {
      name: 'Henry',
      pj: 0,
      pg: 0,
      pp: 0,
      jf: 0,
      jc: 0,
      dif: 0
    }
  ];

  const matchData: MatchScoreProps = {
    player1Name: 'Marc',
    player2Name: 'Henry',
    player1Score: 6,
    player2Score: 3,
    theWinner: 'Marc'
  };
  it('should render the calculated player data', () => {
    render(<Player playerData={playersData[0]} matchScore={matchData} />);

    const playerName = screen.getByText('Marc');
    const playerPJ = screen.getByText('4');
    const playerPG = screen.getByText('3');
    const playerPP = screen.getByText('1');
    const playerJF = screen.getByText('18');
    const playerJC = screen.getByText('10');
    const playerDIF = screen.getByText('8');

    expect(playerName).toBeVisible();
    expect(playerPJ).toBeVisible();
    expect(playerPG).toBeVisible();
    expect(playerPP).toBeVisible();
    expect(playerJF).toBeVisible();
    expect(playerJC).toBeVisible();
    expect(playerDIF).toBeVisible();
  });
});
