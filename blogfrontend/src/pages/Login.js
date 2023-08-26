import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../pages/Login/Login.css';
import TrekAPIService from '../pages/TrekAPIService/TrekAPIService';

const Login = () => {

  const [logindata, setLoginData] = useState({ username: "", password: "" });

  const [dbUser, setDbUser] = useState({});

  let navigate = useNavigate();

  const changeHandle = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...logindata, [name]: value });
  }

  const authenticate = (event) => {
    event.preventDefault();
    if (logindata.email === "" || logindata.password === "") {
      toast.error("Please enter valid fields");
      return;
    }
    else {
      console.log(logindata);
      TrekAPIService.getUserByUnamePassword(logindata)
        .then((result) => {
          console.log(result.data);
          setDbUser(result.data);
          toast.success("Login success..");
          sessionStorage.setItem("userinfo", JSON.stringify(result.data));
          navigate('/', { replace: true });
        })
        .catch((error) => {
          console.log(error);
          toast.error("Login issue / Server side..");
          return;
        })

      setLoginData({ email: "", password: "" });
    }

  }

  return (
    <div className='container my-5 mx-auto border-4 p-2'>
      <div className='col-sm-6 offset-sm-3 border border-dark shadow p-3 rounded-2 login-bg'>
        <h3 className='m-3 text-danger'>Login Page</h3>
        <ToastContainer></ToastContainer>
        <form>
          <div class="mb-5 mt-5">
            <label for="email" class="form-label font-weight-bold text-left">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" value={logindata.email} name="email" onChange={changeHandle} />
          </div>
          <div class="mb-5">
            <label for="password" class="form-label font-weight-bold text-left">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password" value={logindata.password} name="password" onChange={changeHandle} />
          </div>
          {/* <div class="form-check mb-5">
            <label class="form-check-label font-weight-bold text-left">
              <input class="form-check-input" type="checkbox" name="remember" /> Remember me
            </label>
          </div> */}
          <button type="button" class="btn btn-primary bg-danger p-2 px-5" onClick={authenticate}>Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login