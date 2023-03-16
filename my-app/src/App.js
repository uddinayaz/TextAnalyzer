import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState(`light`); //whether dark mode is enabled or not//
  const [alert, setAlert] = useState(null);
   
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

 const toggleMode = ()=>{
  if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor = '#203354';
  showAlert("Dark mode has been enabled", "success");
   } 
   else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
     }
  }
  return (
     <>
    {/* <Navbar title="TextUtils" aboutText="About"/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the text to analyze below" mode={mode}/>
           </Route>
    </Switch>
    {/* <About/> */}
    </div>
    </Router>
    </>
  ); 
}
export default App;
