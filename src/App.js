import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar.js'
import {Welcome} from './components/Welcome.js'

function App() {
  return (
    <div className="App">

      <div style={{display:'flex', justifyContent: 'center'}}>
        <Navbar/>
      </div>

      <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', height: '50vh'}}>
        <Welcome/>
      </div>

    </div>
  );
}

export default App;
