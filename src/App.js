import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'

function App() {

  consthandleClick=()=>{
    setTimeout(()=>{
     
    
      window.location.assign( 'http://www.africau.edu/images/default/sample.pdf' )
    },1000)
  }

  useEffect(()=>{
    console.log('calling useEffect')
  
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick} >CLICK</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
