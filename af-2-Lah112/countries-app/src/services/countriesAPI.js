const BASE_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  const data = await response.json();
  return data;
};

export const getCountriesByName = async (name) => {
  const response = await fetch(`${BASE_URL}/name/${name}`);
  const data = await response.json();
  return data;
};

export const getCountriesByRegion = async (region) => {
  const response = await fetch(`${BASE_URL}/region/${region}`);
  const data = await response.json();
  return data;
};

export const getCountryByCode = async (code) => {
  const response = await fetch(`${BASE_URL}/alpha/${code}`);
  const data = await response.json();
  return data;
};
