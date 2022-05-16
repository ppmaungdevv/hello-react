import logo from './logo.svg';
import './App.css';
// import GreetFunc from "./components/GreetFunc";
// import GreetCl from "./components/GreetCl";
// import HelloJSX from './components/HelloJSX'
// import Message from './components/Message'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        {/* <Message /> */}
        {/* <GreetFunc name="Pyae" > 
          <p>Welcome to React</p>
          <p>This function component</p>
        </GreetFunc>
        <GreetCl name="Phyo">
          <p>Welcome to React</p>
          <p>This is class Component</p>
        </GreetCl>
        <HelloJSX /> */}
      </header>
    </div>
  );
}

export default App;
