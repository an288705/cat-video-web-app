import logo from './logo.svg';
import './App.css';
import Youtube from './Youtube';

//React boilerplate
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <Youtube/>
    </div>
  );
}

export default App;
