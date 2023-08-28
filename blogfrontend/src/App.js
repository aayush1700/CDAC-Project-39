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
import TrekAPIService from './pages/TrekAPIService/TrekAPIService';
import Signup from './pages/Signup';
import Userdashboard from './User-routes/Userdashboard';
import Privateroute from './Components/Privateroute';
import ProfileInfo from './User-routes/ProfileInfo';
function App() {
  //this is a comment
  return (
    
   <BrowserRouter>
      <Base/>
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Services" element={<Services/>}/>
        
        
        <Route path="/user" element={<Privateroute />}>
         <Route path="dashboard" element={<Userdashboard />} />
         <Route path="profile-info" element={<ProfileInfo />} />
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
