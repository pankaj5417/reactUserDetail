import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { MainCrud } from './components/Table';

function App() {
  return (
    <div className="App">
      <MainCrud />
      <Form />
    </div>
  );
}

export default App;
