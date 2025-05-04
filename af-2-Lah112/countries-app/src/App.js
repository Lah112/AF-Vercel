import React, { useState, useEffect } from 'react';
import { getAllCountries } from './services/countriesAPI';
import { getSessionData, clearSessionData } from './services/session';
import { addFavorite, removeFavorite, getFavorites } from './services/favorites'; // Import favorite functions
import LoginPage from './services/LoginPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favorites, setFavoritesList] = useState([]);
  const [showFavoritesList, setShowFavoritesList] = useState(false); // New state for toggling favorite list view

  // On initial load, check session
  useEffect(() => {
    const user = getSessionData('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  // Fetch countries once logged in
  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchCountries = async () => {
      try {
        const data = await getAllCountries();
        if (Array.isArray(data)) {
          setCountries(data);
          setFilteredCountries(data);
        } else {
          console.error('API response is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, [isLoggedIn]);

  // Fetch favorite countries from localStorage
  useEffect(() => {
    setFavoritesList(getFavorites());
  }, []);

  // Filter countries based on region and search term
  useEffect(() => {
    let filtered = [...countries];
    if (region !== 'All') {
      filtered = filtered.filter(country => country.region === region);
    }
    if (searchTerm) {
      filtered = filtered.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredCountries(filtered);
  }, [region, searchTerm, countries]);

  // Handle Add/Remove favorite
  const toggleFavorite = (country) => {
    if (favorites.some(fav => fav.cca3 === country.cca3)) {
      removeFavorite(country);
      setFavoritesList(getFavorites());
    } else {
      addFavorite(country);
      setFavoritesList(getFavorites());
    }
  };

  // Handle Logout
  const handleLogout = () => {
    clearSessionData('user');
    setIsLoggedIn(false);
  };

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  // Show favorite countries page
  const renderFavorites = () => {
    return (
      <div className="container mt-4">
        <h2>Your Favorite Countries</h2>
        <div className="row">
          {favorites.length > 0 ? (
            favorites.map((country) => (
              <div
                key={country.cca3}
                className="col-md-3 mb-4"
                onClick={() => setSelectedCountry(country)} // Only trigger modal when clicking the card
                style={{ cursor: 'pointer' }}
              >
                <div className="card h-100">
                  <img
                    src={country.flags?.png}
                    alt={`${country.name.common} flag`}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{country.name.common}</h5>
                    <button
                      className="btn btn-warning"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent modal from opening
                        toggleFavorite(country); // Handle favorite removal
                      }}
                    >
                      Remove from Favorites
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No favorite countries yet.</p>
          )}
        </div>
      </div>
    );
  };

  // Main app
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <button className="btn btn-danger mb-3" onClick={handleLogout}>Logout</button>

        {/* Search and Filter */}
        <div className="form-group" id="search">
          <label>Search by Country Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search for a country"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="form-group" id="regions">
          <label>Filter by Region:</label>
          <select
            className="form-control"
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="All">All Regions</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
          </select>
        </div>

        {/* Display Countries */}
        <div className="row">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <div
                key={country.cca3}
                className="col-md-3 mb-4"
                style={{ cursor: 'pointer' }}
              >
                <div className="card h-100">
                  <img
                    src={country.flags?.png}
                    alt={`${country.name.common} flag`}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{country.name.common}</h5>
                    <button className="btn btn-primary" onClick={() => toggleFavorite(country)}>
                      {favorites.some(fav => fav.cca3 === country.cca3) ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No countries found.</p>
          )}
        </div>

        {/* Favorite Countries Section */}
        <button className="btn btn-secondary mb-3" onClick={() => setShowFavoritesList(!showFavoritesList)}>
          {showFavoritesList ? 'Hide Favorites' : 'Show Favorites'}
        </button>

        {/* Conditionally render favorites */}
        {showFavoritesList && renderFavorites()}
      </div>

      {selectedCountry && (
        <div className="modal-overlay" onClick={() => setSelectedCountry(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="country-details">
              <h2>{selectedCountry.name.common}</h2>
              <img
                src={selectedCountry.flags?.svg}
                alt="flag"
                className="flag-img"
              />
              <p><strong>Capital:</strong> {selectedCountry.capital?.[0] || 'N/A'}</p>
              <p><strong>Region:</strong> {selectedCountry.region}</p>
              <p><strong>Subregion:</strong> {selectedCountry.subregion || 'N/A'}</p>
              <p><strong>Population:</strong> {selectedCountry.population.toLocaleString()}</p>
              <p><strong>Languages:</strong> {selectedCountry.languages ? Object.values(selectedCountry.languages).join(', ') : 'N/A'}</p>
              <button className="close-btn" onClick={() => setSelectedCountry(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
