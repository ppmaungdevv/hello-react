import logo from './logo.svg';
import './App.css';
import UserGreeting from './components/UserGreeting';
// import ParentComponent from './components/ParentComponent';
// import EventBind from './components/EventBind';
// import GreetFunc from "./components/GreetFunc"
// import GreetCl from "./components/GreetCl"
// import HelloJSX from './components/HelloJSX'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import ClickFunc from './components/ClickFunc';
// import ClickCl from './components/ClickCl';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClickFunc /> */}
        {/* <ClickCl /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <GreetFunc name="Pyae" > 
          <p>Welcome to React</p>
          <p>This function component</p>
        </GreetFunc> */}
        {/* <GreetCl name="Phyo">
          <p>Welcome to React</p>
          <p>This is class Component</p>
        </GreetCl> */}
        {/* <HelloJSX /> */}
        <UserGreeting />
      </header>
    </div>
  );
}

export default App;
