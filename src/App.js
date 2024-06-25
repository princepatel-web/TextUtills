import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
//import About from './components/About';
import React from "react";
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";*/

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => setAlert(null), 2000); // Clear alert after 2 seconds
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#103153';
      showAlert("Dark mode has been applied", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been applied", "success");
    }
  };

  return (
    
      <>
        <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
      <Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
         
        </div>
      </>
  );
}

export default App;
