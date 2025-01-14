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
});
