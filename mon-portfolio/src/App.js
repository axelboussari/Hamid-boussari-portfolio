import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Education from './Components/Education'
// import CustomCursor from './Components/CustomCursor';
// import { Routes, Route } from 'react-router-dom';
// import photo  from './Components/test.png'

function App() {
  return (
    <>
    {/* <CustomCursor /> */}
    <title>Hamid's portfolio</title>
    <Header/>
    <Home/>
    <Education/>
    {/* <img src={photo}/> */}
    </>
  );
}

export default App;
