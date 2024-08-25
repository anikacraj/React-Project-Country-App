import { useState, useEffect } from 'react';
import './App.css';

import Countries from './Components/countries/countries';
import { Search } from './Components/countries/Search';

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState([]);

  const fetchData = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilter(data); 
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemove = (name) => {
    const filtering = countries.filter((country) => {
      return country.name.common !== name;
    });
    setFilter(filtering);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilter(newCountries);
  };

  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />

      <div>
        {loading && <h2>Loading.....</h2>}
        {error && <h3>{error.message}</h3>}

        {countries && (
          <Countries countries={filter} onRemove={handleRemove} />
        )}
      </div>
    </>
  );
}

export default App;
