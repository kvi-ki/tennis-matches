import Table from '@/components/table/Table';
import { render, screen } from '@testing-library/react';

describe('Player', () => {
  it('should render a player data', () => {
    render(<Table />);

    const playerName = screen.getByText('Marc');

    expect(playerName).toBeVisible();
  });
});
