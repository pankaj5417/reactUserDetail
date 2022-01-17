import logo from './logo.svg';
import './App.css';
import { Body } from './components/Body';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body></Body>
    </div>
  );
}

export default App;
