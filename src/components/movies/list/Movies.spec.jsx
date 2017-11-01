import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Movies } from './Movies';

const defaultProps = {
  search: '?searchType=movie&query=Quentin Tarantino',
  match: {
    params: {
      query: '',
      filter: ''
    }
  },
  getMovies: jest.fn(),
  movies: []
};

function setup(props = defaultProps) {
  const component = shallow(<Movies {...props} />);

  return {
    component
  };
}

const fakeProps = {
  search: '?searchType=movie&query=Quentin Tarantino',
  match: {
    params: {
      query: '',
      filter: ''
    }
  },
  getMovies: jest.fn(),
  movies: [
    { id: 1, original_title: 'AAA' },
    { id: 2, original_title: 'DDD' },
    { id: 3, original_title: 'BBB' },
    { id: 4, original_title: 'CCC' }
  ]
};

jest.mock('../movie/Movie', () => (props) => <figure id={props.movie.id}>Movie {props.movie.original_title}</figure>);

describe('Movies component ---- Pure testing', () => {
  const { component } = setup();
  it('render the DUMB component', () => {
    expect(component.length).toEqual(1);
  });

  it('should check default state', () => {
    expect(component.find('.no-films').text()).toEqual('No Films Found');
  });

  it('should display custom state of filter buttons and search input', () => {
    const { component } = setup(fakeProps);
    expect(component.props().children.length).toEqual(4);
  });

});

describe('Movies component --- Snapshot', () => {
  it('Default value (empty array)', () => {
    const renderedValue = renderer.create(<Movies {...defaultProps} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('Some data', () => {
    const renderedValue = renderer.create(<Movies {...fakeProps} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
