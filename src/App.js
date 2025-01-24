import { useState } from 'react';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
}
from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const [mode, setMode] = useState("Light");
  const toggle = ()=> {
    if(mode === 'Light') {
      setMode("Dark");
      document.body.style.backgroundColor = "#54626F";
      showAlert("Dark Mode Enabled", "success");
    }
    else{
      setMode("Light")
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light Mode Enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggle={toggle}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<Textarea mode={mode} showAlert={showAlert}/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
