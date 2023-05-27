import React, { useState } from 'react';

export const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm.trim() === '') {
      setError('Ingresa un término de búsqueda');
      return;
    }

    onSearch(searchTerm)
      .then((results) => {
        if (results.length === 0) {
          setError('No se encontró la película buscada');
        }
      })
      .catch((error) => {
        setError('Ocurrió un error al realizar la búsqueda');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar películas..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      {error && <div className="text-danger mt-2">{error}</div>}
    </form>
  );
};

