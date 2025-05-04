//Unit Tests for countriesAPI.js
import {
    getAllCountries,
    getCountriesByName,
    getCountriesByRegion,
    getCountryByCode,
  } from './countriesAPI';
  
  global.fetch = jest.fn();
  
  describe('countriesAPI service', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it('fetches all countries', async () => {
      const mockData = [{ name: { common: 'Sri Lanka' } }];
      fetch.mockResolvedValueOnce({
        json: () => Promise.resolve(mockData),
      });
  
      const data = await getAllCountries();
      expect(fetch).toHaveBeenCalledWith('https://restcountries.com/v3.1/all');
      expect(data).toEqual(mockData);
    });
  
    it('fetches countries by name', async () => {
      const mockData = [{ name: { common: 'India' } }];
      fetch.mockResolvedValueOnce({
        json: () => Promise.resolve(mockData),
      });
  
      const data = await getCountriesByName('India');
      expect(fetch).toHaveBeenCalledWith('https://restcountries.com/v3.1/name/India');
      expect(data).toEqual(mockData);
    });
  
    it('fetches countries by region', async () => {
      const mockData = [{ region: 'Asia' }];
      fetch.mockResolvedValueOnce({
        json: () => Promise.resolve(mockData),
      });
  
      const data = await getCountriesByRegion('Asia');
      expect(fetch).toHaveBeenCalledWith('https://restcountries.com/v3.1/region/Asia');
      expect(data).toEqual(mockData);
    });
  
    it('fetches country by code', async () => {
      const mockData = [{ cca3: 'LKA' }];
      fetch.mockResolvedValueOnce({
        json: () => Promise.resolve(mockData),
      });
  
      const data = await getCountryByCode('LKA');
      expect(fetch).toHaveBeenCalledWith('https://restcountries.com/v3.1/alpha/LKA');
      expect(data).toEqual(mockData);
    });
  });
  