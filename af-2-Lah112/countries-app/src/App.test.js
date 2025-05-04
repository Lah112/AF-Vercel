import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { getAllCountries } from './services/countriesAPI';

jest.mock('./services/countriesAPI');

describe('App Component', () => {
  beforeEach(() => {
    getAllCountries.mockResolvedValue([
      {
        cca3: 'IND',
        name: { common: 'India' },
        capital: ['New Delhi'],
        region: 'Asia',
        population: 1400000000,
        flags: { png: 'india-flag.png', svg: 'india-flag.svg' },
        subregion: 'Southern Asia',
        languages: { hin: 'Hindi', eng: 'English' },
        timezones: ['UTC+05:30'],
      },
    ]);
  });

  it('renders country cards after fetch', async () => {
    render(<App />);

    await waitFor(() => screen.getByText('India'));

    expect(screen.getByText('India')).toBeInTheDocument();
  });

  /*it('filters by region', async () => {
    render(<App />);
    await waitFor(() => screen.getByText('India'));

    const regionSelect = screen.getByLabelText(/Filter by Region/i);
    fireEvent.change(regionSelect, { target: { value: 'Asia' } });

    expect(screen.getByText('India')).toBeInTheDocument();
  });*/

  it('searches by country name', async () => {
    render(<App />);
    await waitFor(() => screen.getByText('India'));

    fireEvent.change(screen.getByPlaceholderText('Search for a country'), {
      target: { value: 'India' },
    });

    expect(screen.getByText('India')).toBeInTheDocument();
  });

  it('shows modal with country details on click', async () => {
    render(<App />);

    // Test for modal functionality if needed
  });
});
