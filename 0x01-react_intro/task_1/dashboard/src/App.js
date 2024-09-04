import './App.css';
import logo from './Holberton-logo.jpg';
import {getFullYear, getFooterCopy} from "./utils";

function App() {
  return (
      <div className='App'>
        <div className='App-header'>
            <img src={ logo } alt='Holberton Logo' />
          <h1>School dashboard</h1>
        </div>
        <div className='App-body'>
          <p>Login to access the full dashboard</p>
        </div>
        <div className='App-footer'>
          <p>Copyright {getFullYear()} - { getFooterCopy(true)}</p>
        </div>
      </div>
  );
}

export default App;