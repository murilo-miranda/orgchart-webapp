import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { CompanyForm } from './CompanyForm';
import { MockedProvider } from '@apollo/client/testing';
import { createCompanyMockSuccess } from '../mocks/companies.mock';

describe('CompanyForm Component', () => {
  it('create a company and show success message', async () => {
    render(
      <MockedProvider mocks={createCompanyMockSuccess}>
        <CompanyForm />
      </MockedProvider>
    );

    const input = screen.getByLabelText(/nome/i);
    fireEvent.change(input, { target: { value: 'Uol Tech' } });

    const button = screen.getByRole('button', { name: /cadastrar/i });
    fireEvent.click(button);

    const successMessage = await screen.findByText(/empresa criada com sucesso/i);
    expect(successMessage).toBeInTheDocument();
  });
});
