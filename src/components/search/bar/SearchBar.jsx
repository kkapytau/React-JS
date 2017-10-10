import React from 'react';
import PropTypes from 'prop-types';
import SearchResult from '../results/SearchResult';
import SearchForm from '../form/SearchForm';
import SearchFilters from '../filters/SearchFilters';
import './searchBar.scss';

export default function SearchBar() {
  return (
    <section className="search-bar">
      <SearchForm />
      <section className="movie-panel">
        <SearchResult />
        <SearchFilters />
      </section>
    </section>
  );
}

