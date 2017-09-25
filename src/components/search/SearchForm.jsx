import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';

function SearchForm(props) {
  let textInput = '';

  function submitHandler(e) {
    e.preventDefault();
    props.history.push(`/search/${textInput.value}`);
  }

  return (
    <form>
      <fieldset className="search-section">
        <label htmlFor="movie-search">Find your movie</label>
        <input id="movie-search" type="text" ref={(input) => { textInput = input; }} />
        <span id="arrow">⤶</span>
      </fieldset>
      <fieldset className="bottom-section">
        <div className="search-filters">
          <span>Search By</span>
          <button className="btn btn-danger" type="button">Title</button>
          <button className="btn" type="button">Director</button>
        </div>
        <div className="form-submit">
          <button className="btn btn-danger" onClick={submitHandler} type="submit">Search</button>
        </div>
      </fieldset>
    </form>
  );
}

export default withRouter(SearchForm);

SearchForm.defaultProps = {
  history: null
};

SearchForm.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};
