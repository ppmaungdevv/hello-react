// import logo from './logo.svg';
import './App.css';
import GreetFunc from "./components/GreetFunc";
import GreetCl from "./components/GreetCl";
import HelloJSX from './components/HelloJSX'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello react
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <GreetFunc />
      <GreetCl />
      <HelloJSX />
    </div>
  );
}

export default App;
