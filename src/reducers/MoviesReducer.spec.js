import moviesReducer from './MoviesReducer';
import { getMoviesSuccess, getMovieData } from '../actions/MoviesAction';

const initialState = {
  movies: []
};

/* eslint-env jest */
describe('Reducers', () => {
  describe('moviesReducer', () => {
    it('should provide the initial state', () => {
      expect(moviesReducer(undefined, {})).toEqual(initialState);
    });

    it('should get Movie Data', () => {
      expect(moviesReducer(initialState, getMovieData({ name: 'Pulp Fiction' }))).toEqual({
        movies: [],
        movie: { name: 'Pulp Fiction' }
      });
    });

    it('should get List of movies', () => {
      expect(moviesReducer(initialState, getMoviesSuccess([
        { name: 'Pulp Fiction' },
        { name: 'Dogs' }
      ]))).toEqual({
        movies: [
          { name: 'Pulp Fiction' },
          { name: 'Dogs' }
        ]
      });
    });

    it('should ignore unknown actions', () => {
      expect(moviesReducer(initialState, { type: 'unknown' })).toEqual(initialState);
    });
  });
});
