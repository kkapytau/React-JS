import React from 'react';
import './styles.scss';

export default function SearchFilters() {
  return (
    <ul className="movie-filters">
      <li>Sort by</li>
      <li>release date</li>
      <li className="selected">rating</li>
    </ul>
  );
}
