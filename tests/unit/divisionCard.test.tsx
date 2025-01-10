import DivisionCard from '@/components/divisionCard/DivisionCard';
import { render, screen } from '@testing-library/react';

describe('divisionCard', () => {
  it('should render a heading', () => {
    render(<DivisionCard />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
