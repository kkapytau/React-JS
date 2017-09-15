import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDom from 'react-dom';
import SearchBar from './components/search/SearchBar';
import Movies from './components/results/Movies';

function render() {
  return ReactDom.render(
    <AppContainer>
      <div>
        <SearchBar result="7 movies found" />
        <Movies />
      </div>
    </AppContainer>,
    document.getElementById('app')
  );
}

render();

if (module.hot) {
  module.hot.accept('./index', render);
}
