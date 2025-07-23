import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Employees } from './Employees'

describe('Employees Component', () => {
  describe('When employees exist', () => {
    test("it renders employees name", async () => {
      const mockData = [
        { id: 1, name: "Murilo", email: "murilo@uol.com.br", pictureUrl: '' },
        { id: 2, name: "Felipe", email: "felipe@uol.com.br", pictureUrl: '' },
      ];

      render(<Employees employees={mockData} />);

      expect(await screen.findByText('Colaboradores')).toBeInTheDocument();
      expect(await screen.findByText('Murilo')).toBeInTheDocument();
      expect(await screen.findByText('Felipe')).toBeInTheDocument();
    });
  });

  describe('When employees does not exist', () => {
    test("it renders empty message", async () => {
      render(<Employees employees={[]} />);

      expect(await screen.findByText("Não existem colaboradores cadastrados")).toBeInTheDocument();
    });
  });
});
