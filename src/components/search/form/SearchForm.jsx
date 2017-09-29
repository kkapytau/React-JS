import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default class SearchForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <fieldset className="search-section">
          <label htmlFor="movie-search">Find your movie</label>
          <input id="movie-search" type="text" value={this.state.value} onChange={e => this.handleChange(e)} />
          <span id="arrow">⤶</span>
        </fieldset>
        <fieldset className="bottom-section">
          <div className="search-filters">
            <span>Search By</span>
            <button className="btn btn-danger" type="button">Title</button>
            <button className="btn" type="button">Director</button>
          </div>
          <div className="form-submit">
            <Link className="btn btn-danger" to={`/search/${this.state.value}`}>Search</Link>
          </div>
        </fieldset>
      </form>
    );
  }
}
