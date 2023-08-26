import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './Components/Base';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

import Demo from './pages/Demo';

import TrekAPIService from './pages/TrekAPIService/TrekAPIService';
import Signup from './pages/Signup';

function App() {
  //this is a comment
  return (
    
   <BrowserRouter>
      <Base/>
      <Routes>
        <Route path="/" element={<Demo/>} />
        <Route path="/" element={<Home/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Services" element={<Services/>}/>
        <Route path="Demo" element={<Demo/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
