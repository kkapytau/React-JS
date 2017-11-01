import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { SearchForm } from './SearchForm';

const defaultProps = {
  location: { search: '' },
  query: '',
  movieActions: { getMovies: jest.fn() },
  history: { push: jest.fn() }
};

function setup(props = defaultProps) {
  const component = shallow(<SearchForm {...props} />);

  return {
    component,
    buttons: component.find('button'),
    searchInput: component.find('#movie-search')
  };
}

const fakeProps = {
  location: { search: '?searchType=person' },
  query: 'Quentin Tarantino',
  movieActions: { getMovies: jest.fn() },
  history: { push: jest.fn() }
};

describe('Search Form component ---- Pure testing', () => {
  const { component, buttons, searchInput } = setup();
  it('render the DUMB component', () => {
    expect(component.length).toEqual(1);
  });
  it('test filterHandle function', () => {
    buttons.at(1).simulate('click');
    expect(component.state().toggle).toEqual(false);
  });

  it('test handleChange function', () => {
    searchInput.simulate('change', { target: {
      value: fakeProps.query }
    });
    expect(component.state().value).toEqual(fakeProps.query);
  });

  it('test submitHandler function', () => {
    const submitHandlerMock = jest.fn();
    component.instance().submitHandler = submitHandlerMock;
    component.find('form').simulate('submit');
    expect(submitHandlerMock).toBeCalled();
  });
  it('should check default state of filter buttons and search input ', () => {
    expect(buttons.at(0).hasClass('btn-danger')).toEqual(true);
    expect(buttons.at(1).hasClass('btn-danger')).toEqual(false);
    expect(searchInput.props().value).toEqual('');
  });

  it('should display custom state of filter buttons and search input', () => {
    const { buttons, searchInput } = setup(fakeProps);
    expect(buttons.at(0).hasClass('btn-danger')).toEqual(false);
    expect(buttons.at(1).hasClass('btn-danger')).toEqual(true);
    expect(searchInput.props().value).toEqual(fakeProps.query);
  });

});

describe('Search Form component --- Snapshot', () => {
  it('Default value (empty array)', () => {
    const renderedValue = renderer.create(<SearchForm {...defaultProps} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('Some data', () => {
    const renderedValue = renderer.create(<SearchForm {...fakeProps} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
