import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar.js'

function App() {
  return (
    <div className="App">

      <div style={{display:'flex', justifyContent: 'center'}}>
        <Navbar/>
      </div>
      
    </div>
  );
}

export default App;
