import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import { 
//   BrowserRouter as Router,
//   Routes,
//   Route
//  } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-light');
  // }

  // const toggleMode = (cls)=>{
  //   removeBodyClasses();
  //   document.body.classList.add('bg-'+cls);
  //   if(mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#042743';
  //     showAlert("Dark mode has been enabled!", "success");
  //   }else{
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Dark mode has been disabled!", "success");
  //   }
  // }

  const darkMode = ()=>{
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled!", "success");
  }
  const lightMode = ()=>{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Dark mode has been Disabled!", "success");
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} darkMode={darkMode} lightMode={lightMode}/>
      <Alert alert={alert}/>
      {/* <Routes> */}
        <TextForm showAlert = {showAlert} heading="Type the text here to analyze" mode={mode}/>
        {/* <Route exact path="/about" element={<About mode={mode}/>}/> */}
      {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
