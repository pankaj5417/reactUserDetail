import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import { Form } from './components/Form';


function App() {
  const test=useRef(1);
  const inputRef= useRef(null)

  const [, setD]=useState(1)

  console.log("Rendered", test)

  return (
    <div className="App">
 {/*
      <button onClick={()=>{
        test.current=test.current+1;
        console.log(test)
      }}></button>

      <button onClick={()=>{
        setD((p)=>p+1)
      }}></button>

     onMouseMove={(e)=>{
        console.log(e.clientX, e.clientY)
        setMouse(`X${e.clientX}`)
      }} 

    <div ref={inputRef} style={{height:"300px",width:"200px", background:"aquamarine"}} >
        
    </div>

      <button onClick={()=>{
      inputRef.current.scrollIntoView()
      }}></button>
    */}
    <Form />  
    </div>
  );
}

export default App;
