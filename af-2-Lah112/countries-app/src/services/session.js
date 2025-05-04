// services/session.js
export const setSessionData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getSessionData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const clearSessionData = (key) => {
  localStorage.removeItem(key);
};

// Store favorites
export const setFavorites = (favorites) => {
  setSessionData('favorites', favorites);
};

// Get favorites
export const getFavorites = () => {
  return getSessionData('favorites') || [];
};
