import filterReducer from './FilterReducer';
import { getFilterData, getSearchText } from '../actions/FilterActions';

const initialState = {
  searchType: 'movie',
  query: ''
};

/* eslint-env jest */
describe('Reducers', () => {
  describe('filterReducer', () => {
    it('should provide the initial state', () => {
      expect(filterReducer(undefined, {})).toEqual(initialState);
    });

    it('should get Filter Data', () => {
      expect(filterReducer(initialState, getFilterData('person'))).toEqual({
        query: '',
        searchType: 'person'
      });
    });

    it('should get Search Text Data', () => {
      expect(filterReducer(initialState, getSearchText('100'))).toEqual({
        searchType: 'movie',
        query: '100'
      });
    });

    it('should ignore unknown actions', () => {
      expect(filterReducer(initialState, { type: 'unknown' })).toEqual(initialState);
    });
  });
});
