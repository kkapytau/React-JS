import React from 'react';

export default function SearchResult(props) {
  return <span id="results">{props.result}</span>;
}

SearchResult.defaultProps = {
  result: '0 movies found'
};

SearchResult.propTypes = {
  result: React.PropTypes.string
};
