import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bar from './components/Bar'
import * as serviceWorker from './serviceWorker';
import Men from './components/Men'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Welcome from './pages/welcome.js'

function Header() {
    return (
      <div>
        <Route exact path="/" component={Bar}/>
        <Route path="/men" component={Men}/>
      </div>
    )
}

function Main() {
    return (
        <div>
            <Router>
                <Header/>
            </Router>
            <Welcome/>
        </div>
    )
}

ReactDOM.render(<Main/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
