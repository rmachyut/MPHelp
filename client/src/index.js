import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './utils/StateProvider';
import reducer, { intialState } from './utils/reducer';

ReactDOM.render(
    <StateProvider intialState={intialState} reducer={reducer}>
        <App />
    </StateProvider>,
    document.getElementById('root')
);

