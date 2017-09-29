import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default function SearchResult(props) {
  return <span id="results">{props.result}</span>;
}

SearchResult.defaultProps = {
  result: '0 movies found'
};

SearchResult.propTypes = {
  result: PropTypes.string
};
