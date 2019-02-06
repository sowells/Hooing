import React, { Component } from 'react';
import {useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Example() {
  const [count, setCount] = useState(0)
  return (
      <div>
            <p>You click {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
      </div>

  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.!!!
          </p>
          <p>
            그냥
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        Example()
      </div>
    );
  }
}

export default App;
