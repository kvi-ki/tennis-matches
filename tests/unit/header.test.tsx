import Header from '@/components/header/Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('should print División', () => {
    render(<Header />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent('División');
  });
});
