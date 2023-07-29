import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from 'react-router-dom'
function App() {
  
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      message : message,
      type    : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const toggleMode=()=>{
    if(mode==='dark'){
      setmode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color ='black';
      showAlert("Light Mode is Enabled","success");
    }else{
      setmode("dark");
      document.body.style.backgroundColor = 'grey';
      document.body.style.color ='white';
      showAlert("Dark Mode is Enabled","success");
    }
  }
  
  
  const [mode,setmode] = useState("light");
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" About="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-4">
              {/* <Routes> */}
               {/* <Route exact path="/"  element={<TextForm heading="Enter Text Here" mode={mode} showAlert={showAlert} />} /> */}
               <TextForm heading="Enter Text Here" mode={mode} showAlert={showAlert} />
               {/* <Route exact path="/about"  element={<About />} /> */}
              {/* </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
