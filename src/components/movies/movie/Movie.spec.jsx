import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Movie } from './Movie';
import { POSTER_PATH } from '../../../constants/Constants';

const renderer = new ShallowRenderer();

const defaultProps = {
  filtersState: {
    searchText: 'test',
    searchType: '',
    query: ''
  },
  movie: {
    poster_path: 'Unknown',
    original_title: 'Unknown',
    release_date: 'Unknown',
    id: 3
  },
  getStaticMovie: jest.fn()
};

function setup(props = defaultProps) {
  const component = shallow(<Movie {...props} />);

  return {
    component,
    link: component.find('Link')
  };
}

const fakeProps = {
  filtersState: {
    searchText: 'test',
    searchType: '',
    query: ''
  },
  movie: {
    poster_path: '/5WJnxuw41sddupf8cwOxYftuvJG.jpg',
    original_title: 'Django Unchained',
    release_date: '2012-12-25',
    id: 3
  },
  getStaticMovie: jest.fn()
};

describe('Movie component ---- Pure testing', () => {
  const { component, link } = setup();
  it('render the DUMB component', () => {
    expect(component.length).toEqual(1);
  });
  it('test handler function', () => {
    link.simulate('click');
    expect(defaultProps.getStaticMovie).toBeCalled();
    expect(defaultProps.getStaticMovie.mock.calls[0][0]).toEqual(3);
  });

  it('should check default state', () => {
    expect(component.find('.title').text()).toEqual(defaultProps.movie.original_title);
    expect(component.find('.date').text()).toEqual(defaultProps.movie.release_date);
    expect(component.find('img').props().src).toEqual(`${POSTER_PATH}${defaultProps.movie.poster_path}`);
  });

  it('should display custom state of filter buttons and search input', () => {
    const { component } = setup(fakeProps);
    expect(component.find('.title').text()).toEqual(fakeProps.movie.original_title);
    expect(component.find('.date').text()).toEqual(fakeProps.movie.release_date);
    expect(component.find('img').props().src).toEqual(`${POSTER_PATH}${fakeProps.movie.poster_path}`);
  });

});

describe('Movie component --- Snapshot', () => {
  it('Default value (empty array)', () => {
    const renderedValue = renderer.render(<Movie {...defaultProps} />);
    expect(renderedValue).toMatchSnapshot();
  });
  it('Some data', () => {
    const renderedValue = renderer.render(<Movie {...fakeProps} />);
    expect(renderedValue).toMatchSnapshot();
  });
});

