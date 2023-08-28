<<<<<<< HEAD
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Base from "./Components/Base";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Signup from "./pages/Register/Register";
import About from "./Components/About";
import Services from "./pages/Services";
import TrekAPIService from "./pages/TrekAPIService/TrekAPIService";
import Admin from "./Components/Admin";


=======
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
<<<<<<< HEAD
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
=======
>>>>>>> 032faf6a69f7887069f371b6acba70ed8f5313ea
function App() {
  const USER_TYPES = {
    USER: "User",
    ADMIN: "Admin",
  };
>>>>>>> a5f43084a19b946d5a9acdfd635d076d8c8de17f

  const CURRENT_USER_TYPE = USER_TYPES.USER;

  return (
    <BrowserRouter>
      <Base />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />

        {/*we want to protect these Routes*/}
        <Route
          path="/"
          element={
            <UserElement>
              <Home />
            </UserElement>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminElement>
              <Admin />
            </AdminElement>
          }
        />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>



    </BrowserRouter>
  );


  function UserElement({ children }) {
    if (CURRENT_USER_TYPE = USER_TYPES.USER) {
      return <>{children}</>
    }
    else {
      return <Navigate to={'/PageNotFound'} />
    }
    return <>{children}</>
  }


  function AdminElement({ children }) {
    if (CURRENT_USER_TYPE = USER_TYPES.ADMIN) {
      return <>{children}</>
    }
    else {
      return <div>no access to this page for you</div>
    }
    return <>{children}</>
  }


}
export default App;