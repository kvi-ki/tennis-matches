import DivisionCard from '@/components/divisionCard/DivisionCard';
import { render, screen } from '@testing-library/react';
import data from '../../mock.json';
import { LeagueDataProps } from '@/components/leagueData/LeagueData';

describe('divisionCard', () => {
  it('should render a heading', () => {
    const leagueData: LeagueDataProps[] = data.map((league) => league);
    render(<DivisionCard league={leagueData[0]} />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeVisible();
  });

  it('should render a table', () => {
    const leagueData: LeagueDataProps[] = data.map((league) => league);
    render(<DivisionCard league={leagueData[0]} />);

    const table = screen.getByRole('table');

    expect(table).toBeVisible();
  });

  it('should render matches section', () => {
    const leagueData: LeagueDataProps[] = data.map((league) => league);
    render(<DivisionCard league={leagueData[0]} />);

    const matchesHeading = screen.getByRole('heading', { level: 2 });

    expect(matchesHeading).toBe('Partidos');
  });
});
