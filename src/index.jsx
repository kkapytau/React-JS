import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';

function render() {
  return ReactDom.render(
    <AppContainer>
      <Router>
        <App />
      </Router>
    </AppContainer>,
    document.getElementById('app')
  );
}

render();

if (module.hot) {
  module.hot.accept('./index', render);
}
