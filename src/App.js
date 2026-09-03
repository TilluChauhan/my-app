import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm2 from './components/TextForm2';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const ToggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode enabled", "success");
    }
  };

  return (
    <HashRouter>
      <Navbar title='Tushar' aboutText='About Us' contactText='Contact Us' mode={mode} toggleMode={ToggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm2 showAlert={showAlert} mode={mode} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;