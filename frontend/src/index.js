import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App2 slides={['image-1', 'image-2', 'image-3', 'image4']} useImages='false'/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
