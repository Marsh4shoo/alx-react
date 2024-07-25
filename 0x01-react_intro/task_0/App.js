import React from 'react';
import './App.css';
import logo from './holberton-logo.jpg';
import { getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton School logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>{getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;

