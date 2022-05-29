import logo from './logo.svg';
import './App.css';
import InputParent from './components/InputParent';
// import LifeCycleMounting from './components/LifeCycleMounting';
// import ParentForRegAndPure from './components/ParentForRegAndPure';
// import RefsDemo from './components/RefsDemo';
// import Form from './components/Form';
// import StyleSheet from './components/StyleSheet';
// import InlineStyle from './components/InlineStyle';
// import UserGreeting from './components/UserGreeting';  
// import NameList from './components/NameList';
// import ParentComponent from './components/ParentComponent';
// import EventBind from './components/EventBind';
// import GreetFunc from "./components/GreetFunc"
// import GreetCl from "./components/GreetCl"
// import HelloJSX from './components/HelloJSX'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import ClickFunc from './components/ClickFunc';
// import ClickCl from './components/ClickCl';
// import './style/normalStyle.css'
// import mod_style from './style/modStyle.module.css' // module css only works for the imported files

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputParent />
        {/* <RefsDemo /> */}
        {/* <ParentForRegAndPure/> */}
        {/* <LifeCycleMounting /> */}
        {/* <Form/> */}
        {/* <h1 className='error'>Normal Style</h1>
        <h2 className={mod_style.success}>Mod Style</h2>
        <StyleSheet primary={true} />
        <InlineStyle /> */}
        {/* <NameList/> */}
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
        {/* <UserGreeting /> */}
      </header>
    </div>
  );
}

export default App;
