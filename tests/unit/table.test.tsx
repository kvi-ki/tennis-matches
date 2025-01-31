import data from '../../mock.json';
import Table from '@/components/table/Table';
import { PlayerProps } from '@/components/player/Player';
import { render, screen } from '@testing-library/react';
import { LeagueDataProps } from '@/components/leagueData/LeagueData';

describe('Table', () => {
  it('should render column headers', () => {
    const allPlayers: PlayerProps[][] = data.map((player) => {
      return player.playersData;
    });
    const playersData = allPlayers[0];

    render(<Table playersData={playersData} />);

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
      return player.playersData;
    });
    const playersData = allPlayers[0];

    render(<Table playersData={playersData} />);

    const rows = screen.queryAllByRole('row');

    expect(rows.length).toBeGreaterThan(1);
  });

  it('should calculate player statistic', () => {
    const league: LeagueDataProps = {
      division: '1',
      playersData: [
        {
          name: 'Marc',
          pj: '',
          pg: '',
          pp: '',
          jf: '',
          jc: '',
          dif: ''
        },
        {
          name: 'Henry',
          pj: '',
          pg: '',
          pp: '',
          jf: '',
          jc: '',
          dif: ''
        }
      ],
      matches: [
        {
          player1: 'Marc',
          player2: 'Henry',
          score: '9 - 7'
        }
      ]
    };

    render(<Table playersData={league.playersData} />);

    const player1 = league.playersData[0];
    const player2 = league.playersData[1];

    expect(player1.pj).toBe(1);
    expect(player1.pg).toBe(1);
    expect(player1.pp).toBe(0);
    expect(player1.jf).toBe(9);
    expect(player1.jc).toBe(7);
    expect(player1.dif).toBe(2);

    expect(player2.pj).toBe(1);
    expect(player2.pg).toBe(0);
    expect(player2.pp).toBe(1);
    expect(player2.jf).toBe(7);
    expect(player2.jc).toBe(9);
    expect(player2.dif).toBe(-2);
  });
});
