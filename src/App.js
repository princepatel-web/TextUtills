import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);

    if (cls === 'dark') {
      setMode('dark');
      showAlert("Dark mode has been applied", "success");
    } else if (cls === 'light') {
      setMode('light');
      showAlert("Light mode has been applied", "success");
    } else if (cls === 'danger') {
      setMode('danger');
      showAlert("Danger mode has been applied", "success");
    } else if (cls === 'primary') {
      setMode('primary');
      showAlert("Primary mode has been applied", "success");
    } else if (cls === 'warning') {
      setMode('warning');
      showAlert("Warning mode has been applied", "success");
    } else if (cls === 'success') {
      setMode('success');
      showAlert("Success mode has been applied", "success");
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About title="About TextUtils"/>} />
          <Route path="/" element={<Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
