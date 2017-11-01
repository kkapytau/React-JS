import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { SearchResult } from './SearchResult';

function setup(store = []) {
  const component = shallow(<SearchResult movies={store} />);

  return {
    component,
    results: component.find('#results')
  };
}

const fakeMovies = [{ a1: 1 }, { a2: '2' }, { a3: 3 }];

describe('Search Result component ---- Pure testing', () => {
  const { component, results } = setup();
  it('render the DUMB component', () => {
    expect(component.length).toEqual(1);
  });
  it('should display zero search count', () => {
    expect(results.text()).toMatch(/^0 movies found/);
  });

  it('should display some search count', () => {
    const { results } = setup(fakeMovies);
    expect(results.text()).toMatch(/^3 movies found/);
  });
});

describe('Search Result component --- Snapshot', () => {
  it('Default value (empty array)', () => {
    const renderedValue = renderer.create(<SearchResult movies={[]} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('Some data (Array of 3 items)', () => {
    const renderedValue = renderer.create(<SearchResult movies={fakeMovies} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
