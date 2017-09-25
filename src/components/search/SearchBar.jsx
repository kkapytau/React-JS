import React from 'react';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';
import SearchForm from './SearchForm';
import SearchFilters from './SearchFilters';

export default function SearchBar(props) {
  return (
    <section className="search-bar">
      <SearchForm />
      <section className="movie-panel">
        <SearchResult result={props.result} />
        <SearchFilters />
      </section>
    </section>
  );
}

SearchBar.defaultProps = {
  result: '0 movies found'
};

SearchBar.propTypes = {
  result: PropTypes.string
};
