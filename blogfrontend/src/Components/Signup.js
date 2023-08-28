import React, { useState } from 'react'
import TrekAPIService from './TrekAPIService/TrekAPIService';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';

const Signup1 = () => {
  // const showToastMessage = () => {
  //   toast.success('Success Notification !', {
  //     position: toast.POSITION.TOP_RIGHT
  //   });

  //   toast.error('Error Notification !', {
  //     position: toast.POSITION.TOP_CENTER
  //   });
  // };

  let [registerData, setRegisterData] = 
  useState({ name: "", email: "",  password: "",about: "" });

  // const [message, setMessage] = useState("");

  const changeHandle = (event) => {
    const { name, value } = event.target
    setRegisterData({ ...registerData, [name]: value });
  }
  const addData = (event) => {
    event.preventDefault();
    if (registerData.name === "" || registerData.email === ""  || registerData.password === ""  || registerData.about === "") {
      // setMessage("Plase enter valid data..");
      toast.error("Plase enter valid data..");//{ position: toast.POSITION.CENTER_LEFT });
      return;
    }
    let registerData1 = { name: registerData.name, email: registerData.email, password: registerData.password,  about: registerData.role }
    TrekAPIService.addUser(registerData1)
      .then((result) => {
        console.log(result);
        // setMessage("Registration successfull..");
        toast.success("Registration successfull..");
      })
      .catch((error) => {
        console.log(error);
        // setMessage("Error 400/500..");
        toast.error("Error 400/500..");
      });

    setRegisterData({ name: "", email: "",  password: "",about: "" });
  }


  return (
    <div className='container my-5 mx-auto border-4 border-dark p-2'>
      <div className='col-sm-6 offset-sm-3 border border-dark shadow p-3 rounded-2 register-bg'>
        <ToastContainer></ToastContainer>
        <h3 className='m-3 text-danger'>Registration Page</h3>
        <form action="/">
          {/* <p className='register-message'>{message}</p> */}
          <div className="mb-2 mt-5">
            <label for="name" className="form-label font-weight-bold text-left">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" value={registerData.name} onChange={changeHandle} />
          </div>

          <div className="mb-2 mt-2">
            <label for="email" className="form-label font-weight-bold text-left">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" value={registerData.email} onChange={changeHandle} />
          </div>

        

          <div className="mb-2 mt-2">
            <label for="text" className="form-label font-weight-bold text-left">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" value={registerData.password} onChange={changeHandle} />
          </div>

         
        

          <div className="mb-2 mt-2">
            <label for="about" className="form-label font-weight-bold text-left">About</label>
            <input type="text" className="form-control" id="about" placeholder="Enter About" name="about" value={registerData.role} onChange={changeHandle} />
          </div>

          <button type="button" className="btn btn-primary bg-danger p-2 px-5" onClick={addData}>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Signup1;
