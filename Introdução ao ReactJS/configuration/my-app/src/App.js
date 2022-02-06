import logo from './logo.svg';
import './App.css';
import Buttom from "./Buttom";

function primeiroJSX() {
  return (
    <div>
      <p>Vitor Alcântara - Dev das Galáxias</p>
      <Buttom onClick={() => mySkils('csharp', 'javascript')} name="MySkils" />
    </div>
  )
}

function mySkils(a, b) {
  alert(`${a} e ${b}`);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {primeiroJSX()}
        </p>
      </header>
    </div>
  );
}

export default App;
