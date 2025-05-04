# Country Info App

A React application that allows users to search for countries, filter by region, and view detailed country information. The app supports user login and provides the ability to add/remove countries from a favorites list.

## Features

- **Search Countries**: Search countries by name.
- **Filter by Region**: Filter countries based on their region.
- **Favorites**: Add and remove countries from a favorites list.
- **Country Details**: View detailed information about a country, including capital, population, languages, and flags.
- **User Authentication**: Login functionality with session management.

## Technologies Used

- React
- Bootstrap for UI styling
- React Hooks (useState, useEffect) for state management and lifecycle handling
- LocalStorage for storing favorites
- REST API integration for fetching country data

## Setup and Installation

Follow these steps to set up and run the application locally:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/country-info-app.git
cd country-info-app

=========================================================================
2. Install Dependencies

 npm install
=========================================================================
Folder Structure

/src
  /components       # Contains reusable UI components (e.g., Navbar, CountryCard)
  /services         # Contains services for API requests, favorites, and session management
  /App.js           # Main app component
  /App.css          # Global styles
  /index.js         # Entry point for React app

=========================================================================
Testing

npm test


