import data from '../../mock.json';
import Table from '@/components/table/Table';
import { render, screen } from '@testing-library/react';
import { PlayerProps } from '@/components/player/Player';

describe('Player', () => {
  it('should render a player data', () => {
    const allPlayers: PlayerProps[][] = data.map((player) => {
      return player.playersData;
    });
    const playersData = allPlayers[0];

    render(<Table playersData={playersData} matchesScores={[]} />);

    const playerName = screen.getByText('Marc');
    const playerPJ = screen.getByText('4');
    const playerJC = screen.getByText('20');

    expect(playerName).toBeVisible();
    expect(playerPJ).toBeVisible();
    expect(playerJC).toBeVisible();
  });
});
