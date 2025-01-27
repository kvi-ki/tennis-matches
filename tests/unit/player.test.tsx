import Table from '@/components/table/Table';
import { render, screen } from '@testing-library/react';

describe('Player', () => {
  it('should render a player data', () => {
    render(<Table />);

    const playerName = screen.getByText('Marc');
    const playerPJ = screen.getByText('4');
    const playerJC = screen.getByText('20');

    expect(playerName).toBeVisible();
    expect(playerPJ).toBeVisible();
    expect(playerJC).toBeVisible();
  });
});
