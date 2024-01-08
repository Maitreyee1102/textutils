//import "./app.css";
import Navbar from './components/Navbar';
import  React, { useState } from 'react';
import Alert from './components/Alert';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState('dark');
  const [alert,setAlert] = useState(null);
  const toggleAlert = (Message,type)=>{
    setAlert({
      msg: Message,
      type: type
    })
  }
   const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#1B4242';
     toggleAlert("Dark mode Enabled","warning");
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
     toggleAlert("Light mode Enabled","warning");
    }
  }
  return (
    <>
    <Navbar title='TextUtils' mode= {mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm  mode= {mode} toggleMode={toggleMode} heading='Enter text here'/>
      </>
  );
}
export default App;
