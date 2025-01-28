import Header from '@/components/header/Header';
import data from '../../mock.json';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('should print División', () => {
    const divisionNumber: string[] = data.map((league) => league.division);
    render(<Header divisionNumber={divisionNumber[0]} />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent('División');
  });

  it('should print a division number 1 as a string', () => {
    const divisionNumber: string[] = data.map((league) => league.division);
    render(<Header divisionNumber={divisionNumber[0]} />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent(/1/);
  });
});
