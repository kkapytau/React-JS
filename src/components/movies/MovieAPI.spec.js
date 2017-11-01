import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as API from './MovieAPI';
import { getMoviesSuccess, getMovieData } from '../../actions/MoviesAction';
import { getFilterData, getSearchText } from '../../actions/FilterActions';

describe('works with async/await', () => {
  it('Should dispatch list of movies', async () => {
    const mock = new MockAdapter(axios);
    const params = { searchType: 'movie', query: 'Pulp Fiction' };
    const results = {
      results: [
        { id: 1, name: 'Pulp Fiction' },
        { id: 2, name: '100' },
        { id: 3, name: 'Mad Msx' }
      ]
    };

    // Mock any GET request to /movies
    // arguments for reply are (status, data, headers)
    mock.onGet(`https://api.themoviedb.org/3/search/${params.searchType}?api_key=813f19e9af5835eae0cc65011eff831b&language=en-US&page=1&include_adult=false&query=${params.query}`).reply(200, results);

    // mock the dispatch and getState functions from Redux thunk.
    const dispatch = jest.fn();
    await API.getMovies(params)(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(getFilterData(params.searchType));
    expect(dispatch.mock.calls[1][0]).toEqual(getSearchText(params.query));
    // List of movies can be get like: dispatch.mock.calls[2][0].payload
    expect(dispatch.mock.calls[2][0]).toEqual(getMoviesSuccess(results.results));
    expect(API.getStaticMoviesLength()).toBe(3);
  });

  it('Should dispatch movie', async () => {
    const mock = new MockAdapter(axios);
    const id = 3;
    const results = {
      results: [
        { id: 1, name: 'Pulp Fiction' },
        { id: 2, name: '100' },
        { id: 3, name: 'Mad Msx' }
      ]
    };

    mock.onGet(`https://api.themoviedb.org/3/movie/${id}?api_key=813f19e9af5835eae0cc65011eff831b&language=en-US`).reply(200, results.results[2]);

    const dispatch = jest.fn();
    await API.getMovie(id)(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(getMovieData(results.results[2]));
    API.getStaticMovie(1)(dispatch);
    expect(dispatch.mock.calls[1][0]).toEqual(getMovieData(results.results[0]));

  });
});
