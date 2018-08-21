import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';

import {Provider} from 'react-redux';
import {configureStore} from './app/store/configureStore';

const store = configureStore();

let rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <Provider store = {store}>
            <Router>
                <App />
            </Router>
        </Provider>
        , rootEl)
}

if(module.hot) { // giup trinh duyet hot reload
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render);
    });
}

render();


registerServiceWorker();
