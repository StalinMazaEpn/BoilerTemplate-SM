import React from 'react';
import { render } from 'react-dom'
import './index.scss'; 

import App from './components/App';

const title = 'Webpack React Setup';
console.log(title);

render(
    <div>
        <h1>Hello React & Webpack</h1>
        <img src={require('./static/img/girl.jpg')} alt="IMG LOADING"/>
        <App />
    </div>,
    document.getElementById('app')
);