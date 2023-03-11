
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
const [mode,setMode] = useState('light');
const[onn,setOff] = useState("Darkmode");
const [alert,setAlert]= useState(null);

const showAlert= (message, type)=>{
setAlert({
  msg: message,
  type: type
})
}

const toggleMode =()=>{
  if(mode==='light'){
    setMode('dark');
   setOff("Lightmode");
   document.body.style.backgroundColor = 'black';
   showAlert("dark mode has been enabled","success");
  }
  else{
   setMode('light');
   setOff("Darkmode");
   document.body.style.backgroundColor = 'white';
   showAlert("light mode has been enabled","success");
  }
}

  return (
  
   <>
  
<Navbar title="NextBar" about="About Us" toggleMode={toggleMode} mode={mode} but={onn}/>
<Alert  alert={alert}/>
 <div className="container my-3">
 
        <About />
        <TextForm heading="Enter passage"/>
 </div>

  </>
  );
}

export default App;
