import data from '../../mock.json';
import Table from '@/components/table/Table';
import { PlayerProps } from '@/components/player/Player';
import { render, screen } from '@testing-library/react';

describe('Table', () => {
  it('should render column headers', () => {
    const allPlayers: PlayerProps[][] = data.map((player) => {
      return player.data;
    });
    const players = allPlayers[0];

    render(<Table players={players} />);

    const columnHeaders: Array<string | null> = screen
      .getAllByRole('columnheader')
      .map((header) => header.textContent);

    const expectedColumnHeaders: Array<string> = [
      'Jugador',
      'PJ',
      'PG',
      'PP',
      'JF',
      'JC',
      'Dif'
    ];

    expect(columnHeaders).toEqual(expectedColumnHeaders);
  });

  it('should render a player data from', () => {
    const allPlayers: PlayerProps[][] = data.map((player) => {
      return player.data;
    });
    const players = allPlayers[0];

    render(<Table players={players} />);

    const rows = screen.queryAllByRole('row');

    expect(rows.length).toBeGreaterThan(1);
  });
});
