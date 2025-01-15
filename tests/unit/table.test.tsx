import Table from '@/components/table/Table';
import { render, screen } from '@testing-library/react';

describe('Table', () => {
  it('should render column headers', () => {
    render(<Table />);

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
    render(<Table />);

    const firstRow = screen.getAllByRole('row')[1];

    const cells = firstRow.querySelectorAll('td');

    expect(cells.length).toBeGreaterThan(0);
    expect(cells[0]).toHaveTextContent('Marc');
  });
});
