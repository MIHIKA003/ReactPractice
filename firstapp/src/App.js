import { useState } from 'react';
import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('powderblue'); 

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+ cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'midnightblue';
      document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = 'Amazing Offer!';
      // }, 2000)
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'powderblue';
      document.title = 'TextUtils - Light Mode'
      // setInterval(() => {
      //   document.title = 'Access Now';
      // }, 1500)
    }

    const removeBodyClasses = ()=>{
      document.body.classList.remove('bg-light');
      document.body.classList.remove('bg-dark');
      document.body.classList.remove('bg-primary');
      document.body.classList.remove('bg-danger');
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-warning');
    }
  }

  return (
    <Router>
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} aboutText={"About"}/>
      <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text below" mode={mode}/>}/>
            <Route path="/about" element={<About mode={mode}/>}/>
          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
