import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import {render, screen} from '@testing-library/react'
import { Companies } from './Companies'
import { MockedProvider } from '@apollo/client/testing';
import { describe, expect } from 'vitest';
import {
  companiesMocksEmpty,
  companiesMocksError,
  companiesMocksSuccess
} from '../mocks/companies.mock';

describe('Companies Component', () => {
  describe('When content is loading', () => {
    test("it renders loading message", async () => {
      render(
        <MockedProvider mocks={[]}>
          <Companies />
        </MockedProvider>
      );

      expect(screen.getByText("Carregando empresas...")).toBeInTheDocument();
    });
  });

  describe('When companies exist', () => {
    test("it renders companies name", async () => {
      render(
        <MemoryRouter>
          <MockedProvider mocks={companiesMocksSuccess}>
            <Companies />
          </MockedProvider>
        </MemoryRouter>
      );

      const h1 = await screen.findByText('Empresas');
      const uolLink = await screen.findByRole('link', { name: "Uol" });
      const uolTechLink = await screen.findByRole('link', { name: "Uol Tech" });
      expect(h1).toBeInTheDocument();
      expect(uolLink).toBeInTheDocument();
      expect(uolTechLink).toBeInTheDocument();
    });
  });

  describe('When companies does not exist', () => {
    test("it renders empty message", async () => {
      render(
        <MockedProvider mocks={companiesMocksEmpty}>
          <Companies />
        </MockedProvider>
      );

      const message = await screen.findByText("Não existem empresas cadastradas");
      expect(message).toBeInTheDocument();
    });
  });

  describe('When api is not reachable', () => {
    test("it renders error message", async () => {
      render(
        <MockedProvider mocks={companiesMocksError}>
          <Companies />
        </MockedProvider>
      );

      const errorMessage = await screen.findByText("Ocorreu um erro ao carregar empresas");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
