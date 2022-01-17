import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { UserDetails } from './components/UserDetail';
import { Products } from './components/Products';
import { Users } from './components/Users';
import { Navbar } from './components/Navbar';
import { Contacts } from './components/Contactus';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contactus" element={<Contacts />}></Route>
       <Route path="/users" element={<Users /> }></Route>
       <Route path="/login" element={<Login /> }></Route>

       <Route path="/users/:userid" element={<UserDetails /> }></Route>
       <Route path="/product/:id" element={<Products /> }></Route>
       <Route path="*" element={<div>Not found</div> }></Route>

    </Routes>
     
    </div>
  );
}

export default App;
