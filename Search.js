import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/api/products/search?query=${query}`);
      setResults(res.data);
    } catch (err) {
      console.error('Error searching products:', err);
    }
  };

  return (
    <div className="container">
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" value={query} onChange={handleChange} placeholder="Search products..." />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
      <div className="mt-3">
        {results.map(product => (
          <div key={product._id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text"><small className="text-muted">${product.price}</small></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
