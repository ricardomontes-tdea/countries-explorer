import { useState, useEffect } from "react";

import CountryCard from "./components/CountryCard";
import CountryDetail from "./components/CountryDetail";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";

import { getCountries } from "./utils/getCountries";

import "./styles/App.css";

export const CountriesExplorerApp = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCountries()
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los países. Verifica tu conexión.");
        setLoading(false);
      });
  }, []);

  const matchesSearch = (country) => {
    if (!searchTerm) return true;
    return country.name.common.includes(searchTerm);
  };

  const getFilteredCountries = () => {
    if (searchTerm) {
      return countries.filter(matchesSearch);
    } else if (selectedRegion) {
      return countries.filter((c) => c.region === selectedRegion);
    }
    return countries;
  };

  const filteredCountries = getFilteredCountries();

  const pageCountries = filteredCountries;

  if (loading) {
    return (
      <div className="state-screen">
        <div className="spinner" />
        <p>Cargando países...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="state-screen error">
        <span className="state-icon">⚠️</span>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <h1>🌍 Explorador de Países</h1>
        </div>
      </header>

      <main className="app-main">
        <div className="controls-bar">
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
          <RegionFilter
            selectedRegion={selectedRegion}
            onRegionChange={setSelectedRegion}
          />
        </div>

        <p className="results-summary">
          {filteredCountries.length === countries.length
            ? `${countries.length} países en total`
            : `${filteredCountries.length} países encontrados`}
        </p>

        {pageCountries.length === 0 ? (
          <div className="empty-state">
            <span>🔍</span>
            <p>No se encontraron países con esos filtros.</p>
          </div>
        ) : (
          <div className="countries-grid">
            {pageCountries.map((country) => (
              <CountryCard
                key={country.name.common}
                country={country}
                onClick={() => setSelectedCountry(country)}
              />
            ))}
          </div>
        )}
      </main>

      {selectedCountry && (
        <CountryDetail
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}
    </div>
  );
};
