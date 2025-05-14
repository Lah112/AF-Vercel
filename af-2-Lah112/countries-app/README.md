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

npm test ----for all test cases
npm run test:unit ---for unit testing
npm run test:integration---for integration testing

=========================================================================
Host:https://countries-r3odv9f39-lah112s-projects.vercel.app/
=========================================================================

Project Report: REST Countries React Application

🔗 Chosen API
The application uses the REST Countries API v3.1 to fetch data about all countries worldwide. This free and open-source API provides detailed information including:

Country name

Population

Region

Capital

Languages

Flags

✅ Why This API?
No API key required

Up-to-date and comprehensive

Easy JSON format suitable for React integration

Supports filtering by region and country name

⚠️ Challenges Faced and Solutions
1. CORS Errors and Inconsistent Data
Issue: Sometimes the data structure differed slightly between countries (e.g., missing capital, inconsistent languages).

Solution: Implemented safe access using optional chaining (e.g., country.capital?.[0] || 'N/A') to prevent crashes.

2. Session Handling Without Backend
Issue: Without a backend server, managing user sessions and favorites locally was challenging.

Solution: Used sessionStorage and localStorage to simulate login/logout and save favorite countries.

3. Search and Filter Conflicts
Issue: Combining region filter and search led to unexpected behavior.

Solution: Refactored filtering logic to apply both conditions sequentially in a single useEffect.

4. "Remove from Favorites" Triggering Modal
Issue: Clicking the "Remove from Favorites" button also opened the country details modal due to event bubbling.

Solution: Used event.stopPropagation() to prevent the card's click handler from being triggered when removing a favorite.

5. Deployment Confusion
Issue: Confusion between GitHub Pages and Vercel deployments, and how to update deployed versions after code changes.

Solution: Resolved by using Vercel CLI and GitHub integrations, ensuring smooth redeploys on push.











