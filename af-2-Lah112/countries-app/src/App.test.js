import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { getAllCountries } from './services/countriesAPI';
import { getSessionData } from './services/session'; // Import session service

// Mocking necessary services
jest.mock('./services/countriesAPI');
jest.mock('./services/session');

describe('App Component', () => {
  beforeEach(() => {
    // Mock the session data to simulate a logged-in user
    getSessionData.mockReturnValue({ user: { username: 'testUser' } });

    // Mock the API response for countries
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

    // Wait for the "India" text to appear after fetching countries
    await waitFor(() => screen.getByText('India'));

    // Ensure the country "India" is in the document
    expect(screen.getByText('India')).toBeInTheDocument();
  });

  it('searches by country name', async () => {
    render(<App />);
    await waitFor(() => screen.getByText('India'));

    // Simulate typing in the search box
    fireEvent.change(screen.getByPlaceholderText('Search for a country'), {
      target: { value: 'India' },
    });

    // Check if India appears in the document
    expect(screen.getByText('India')).toBeInTheDocument();
  });
});
