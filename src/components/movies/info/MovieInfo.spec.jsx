import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import { MovieInfo } from './MovieInfo';
import { POSTER_PATH } from '../../../constants/Constants';

const renderer = new ShallowRenderer();

const defaultProps = {
  match: {
    params: {
      query: '',
      filter: ''
    }
  },
  location: {
    search: ''
  },
  getMovie: jest.fn()
};

function setup(props = defaultProps) {
  const component = shallow(<MovieInfo {...props} />);

  return {
    component
  };
}

const fakeProps = {
  match: {
    params: {
      query: '',
      filter: ''
    }
  },
  location: {
    search: ''
  },
  movie: {
    poster_path: 'Unknown',
    original_title: 'Unknown',
    release_date: 'Unknown',
    overview: 'Unknown',
    vote_average: 'Unknown',
    id: 3
  },
  getMovie: jest.fn()
};

describe('Movie Info component ---- Pure testing', () => {
  const { component } = setup();
  it('render the DUMB component', () => {
    expect(component.length).toEqual(1);
  });

  it('should check default state', () => {
    expect(component.find('div').text()).toEqual('No Data');
  });

  it('should display custom state of filter buttons and search input', () => {
    const { component } = setup(fakeProps);
    expect(component.find('.summary').text()).toEqual(fakeProps.movie.overview);
    expect(component.find('.date-time').text()).toEqual(fakeProps.movie.release_date);
    expect(component.find('.circle').text()).toEqual(fakeProps.movie.vote_average);
    expect(component.find('img').props().src).toEqual(`${POSTER_PATH}${fakeProps.movie.poster_path}`);
  });

});

/*
can't use Snapshot as we have error:  You should not use <Link> outside a <Router>
*/
describe('Movie component --- Snapshot', () => {
  it('Default value (empty array)', () => {
    const renderedValue = renderer.render(<MovieInfo {...defaultProps} />);
    expect(renderedValue).toMatchSnapshot();
  });
  it('Some data', () => {
    const renderedValue = renderer.render(<MovieInfo {...fakeProps} />);
    expect(renderedValue).toMatchSnapshot();
  });
});