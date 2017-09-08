import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDom from 'react-dom';
import {HellowWorld} from './components/HellowWorld';

const render = () => {
    ReactDom.render(
        <AppContainer>
            <HellowWorld />
        </AppContainer>,
        document.getElementById('app')
    )
}

render();

if (module.hot) {
    module.hot.accept('./HellowWorld', render);
}
