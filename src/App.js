import logo from './logo.svg';
import './App.css';
import Topnav from './comp/nav';
import Sliders from './comp/sliders'

function App() {
  return (
    <div className="App">

      <Topnav />
      <Sliders />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
       */}
       
    </div>
  );
}

export default App;
