import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchForm() {
  return (
    <form>
      <fieldset className="search-section">
        <label htmlFor="movie-search">Find your movie</label>
        <input id="movie-search" type="text" />
        <span id="arrow">⤶</span>
      </fieldset>
      <fieldset className="bottom-section">
        <div className="search-filters">
          <span>Search By</span>
          <button className="btn btn-danger" type="button">Title</button>
          <button className="btn" type="button">Director</button>
        </div>
        <div className="form-submit">
          <Link className="btn btn-danger" to="/search/Some Name">Search</Link>
        </div>
      </fieldset>
    </form>
  );
}
