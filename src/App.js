import logo from './logo.svg';
import './App.css';
import Test from './Test'
import TestClass from './Testclass'

function App() {
  return (
    <div className="App">
       <Test></Test>
       <Test></Test>
       <TestClass></TestClass>
      <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        hello world
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
    </div>
  );
}

export default App;
