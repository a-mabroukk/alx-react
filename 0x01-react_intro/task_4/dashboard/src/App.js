import React from 'react';
import './App.css';
import holbertonLogo from './holberton_logo.png'; // Import the Holberton logo
import { getFullYear, getFooterCopy } from './utils'; // Import utility functions

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Add the label and input for email */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        {/* Add the label and input for password */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        {/* Add the button */}
        <button type="button">OK</button>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
