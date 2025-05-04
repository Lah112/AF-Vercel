// Add the favorite country to localStorage
export const addFavorite = (country) => {
    const favorites = getFavorites(); // Get existing favorites from localStorage
    if (!favorites.some(fav => fav.cca3 === country.cca3)) {
      favorites.push(country);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };
  
  // Remove the favorite country from localStorage
  export const removeFavorite = (country) => {
    const favorites = getFavorites(); // Get existing favorites from localStorage
    const updatedFavorites = favorites.filter(fav => fav.cca3 !== country.cca3);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  
  // Get all favorite countries from localStorage
  export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  };
  
  // Clear all favorite countries from localStorage
  export const clearFavorites = () => {
    localStorage.removeItem('favorites');
  };
  