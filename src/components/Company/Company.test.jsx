import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Company } from './Company';

describe('Company Component', () => {
  test("it renders company name", () => {
    const mockCompany = { id: '123', name: 'UOL Tech' };

    render(<Company company={mockCompany} />);

    expect(screen.getByText(/Empresa Uol tech/i)).toBeInTheDocument();
    expect(screen.getByText(/infos sobre a empresa/i)).toBeInTheDocument();
  });
});
