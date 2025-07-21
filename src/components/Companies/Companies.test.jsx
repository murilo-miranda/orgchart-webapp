import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import {render, screen} from '@testing-library/react'
import { Companies } from './Companies'
import { describe, expect } from 'vitest';

describe('Companies Component', () => {
  describe('When content is loading', () => {
    test("it renders loading message", async () => {
      render(<Companies loading={true} error={false} companies={[]} />);

      expect(screen.getByText("Carregando empresas...")).toBeInTheDocument();
    });
  });

  describe('When companies exist', () => {
    test("it renders companies name", async () => {
      const mockData = [
        { id: 1, name: "Uol" },
        { id: 2, name: "Uol Tech" },
      ];

      render(
        <MemoryRouter>
          <Companies loading={false} error={false} companies={mockData} />
        </MemoryRouter>
      );


      expect(await screen.findByText('Empresas')).toBeInTheDocument();
      expect(await screen.findByRole('link', { name: 'Uol' })).toBeInTheDocument();
      expect(await screen.findByRole('link', { name: 'Uol Tech' })).toBeInTheDocument();
    });
  });

  describe('When companies does not exist', () => {
    test("it renders empty message", async () => {
      render(<Companies loading={false} error={false} companies={[]} />);
      expect(screen.getByText("Não existem empresas cadastradas")).toBeInTheDocument();
    });
  });

  describe('When api is not reachable', () => {
    test("it renders error message", async () => {
      render(<Companies loading={false} error={true} companies={[]} />);
      expect(screen.getByText("Ocorreu um erro ao carregar empresas")).toBeInTheDocument();
    });
  });
});
