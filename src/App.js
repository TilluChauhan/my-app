//import logo from './logo.svg';
//import About from './About';
import './App.css';
import About from './components/About';
//import About2 from './components/About2';

import Alert from './components/Alert';
import Navbar from './components/Navbar';
//import Navbar2 from './components/Navbar2';
//import TextForm from './components/TextForm';
import TextForm2 from './components/TextForm2';
//import TextForm3 from './components/TextForm3';
//import PropTypes from 'prop-types'
import React,{useState}from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';

//let name='Tushar';



function App() {
  const [alert,setAlert]=useState();
  const  showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type 
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

 //const [darkMode,setDarkMode]=useState(false); //whether Dark Mode is Enabled ar 
 const [mode,setMode]=useState('light');

 const ToggleMode=()=>{
  
   if(mode==='light'){
    setMode('dark'); 
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    showAlert("Dark Mode enabled", "success")
    document.title='TextUtils is Dark';
   /* setInterval(() => {
     document.title='TextUtils is Amazing Mode';
    }, 2000);
    setInterval(() => {
      document.title='Installs TextUtils is Now';
    }, 1500);*/
 
   }else{
    setMode('light'); 
     document.body.style.backgroundColor='white';
    document.body.style.color='black';
         showAlert("White Mode Enabled", "success")
          document.title='TextUtils is White';
  
   }
 }
  
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* Navigation */}
      <Navbar  title='Tushar' aboutText='About Us' contacText='Contact Us' mode={mode} toggleMode={ToggleMode}></Navbar>
     {/* <Navbar2 Title='Tushar' AboutText='About US'></Navbar2>
  <TextForm heading='Enter The Text To Utilize'></TextForm>   
   
    <TextForm3 heading='Enter The Text To Utilize3'></TextForm3>
    <About heading="About Us"></About>
<About2 heading='About Us2'></About2>*/}
   <Alert alert={alert}></Alert>

      {/* Routes */}
      <Routes>
          <Route path="/" element={<TextForm2 showAlert={showAlert} mode={mode}/>} />
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
    </>
 
  );
}



export default App;
