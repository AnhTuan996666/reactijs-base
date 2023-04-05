import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Example';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Mycomponent/>
        </p>
      </header>
    </div>
  );
}

export default App;
