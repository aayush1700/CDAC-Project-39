
// import {
//   Button,
//   Card,
//   CardBody,
//   CardHeader,
//   Col,
//   Container,
//   Form,
//   FormFeedback,
//   FormGroup,
//   Input,
//   Label,
//   Row,
// } from "reactstrap";
// import Base from "../Components/Base";
// import '../pages/SignupPage.css';
// const Signup = () => {

//   return (
//     <Base >
//         <div className="signup-page" >
//         <Row className="mt-4" >
        

//           <Col sm={{ size: 5, offset: 2 }}>
//             <Card color="dark" inverse>
//               <CardHeader>
//                 <h3> Fill Information to Register !!</h3>
//               </CardHeader>

//               <CardBody>
//                 {/* creating form */}

//                 <Form >
//                   {/* Name field */}
//                   <FormGroup>
//                     <Label for="name">Enter Name</Label>
//                     <Input
//                       type="text"
//                       placeholder="Enter here"
//                       id="name"
//                     />
//                   </FormGroup>

//                   {/* email field */}
//                   <FormGroup>
//                     <Label for="email">Enter Email</Label>
//                     <Input
//                       type="email"
//                       placeholder="Enter here"
//                       id="email"
//                     />
//                   </FormGroup>

//                   {/* password field */}
//                   <FormGroup>
//                     <Label for="password">Enter password</Label>
//                     <Input
//                       type="password"
//                       placeholder="Enter here"
//                       id="password"
//                     />
//                   </FormGroup>

//                   {/* about field */}
//                   <FormGroup>
//                     <Label for="about">Write something about yourself</Label>
//                     <Input
//                       type="textarea"
//                       placeholder="Enter here"
//                       id="about"
//                       style={{ height: "250px" }}
//                     />
//                      <br></br>
//                      <br></br>
//                      <div className="button-container ">
//                      <Button >Register </Button>
                    
//                     <Button type="reset" className="ms-2" > Reset </Button>
//                     </div>
//                   </FormGroup>

//                 </Form>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//         </div>
//     </Base>
//   );
// };

// export default Signup;

import React, { useState } from 'react'
import '../pages/Register/Register.css';
import { ToastContainer, toast } from 'react-toastify';
import TrekAPIService from '../pages/TrekAPIService/TrekAPIService';
const Signup = () => {
  // const showToastMessage = () => {
  //   toast.success('Success Notification !', {
  //     position: toast.POSITION.TOP_RIGHT
  //   });

  //   toast.error('Error Notification !', {
  //     position: toast.POSITION.TOP_CENTER
  //   });
  // };

  let [registerData, setRegisterData] = 
  useState({ name: "", email: "", username: "", password: "", address: "", contact: "", role: "" });

  // const [message, setMessage] = useState("");

  const changeHandle = (event) => {
    const { name, value } = event.target
    setRegisterData({ ...registerData, [name]: value });
  }
  const addData = (event) => {
    event.preventDefault();
    if (registerData.name === "" || registerData.email === "" || registerData.username === "" || registerData.password === "" || registerData.address === "" || registerData.contact === "" || registerData.role === "") {
      // setMessage("Plase enter valid data..");
      toast.error("Plase enter valid data..");//{ position: toast.POSITION.CENTER_LEFT });
      return;
    }
    let registerData1 = { name: registerData.name, email: registerData.email, username: registerData.username, password: registerData.password, address: registerData.address, contact: registerData.contact, role: registerData.role }
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

    setRegisterData({ name: "", email: "", username: "", password: "", address: "", contact: "", role: "" });
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
            <label for="text" className="form-label font-weight-bold text-left">Username</label>
            <input type="username" className="form-control" id="username" placeholder="Enter Username" name="username" value={registerData.username} onChange={changeHandle} />
          </div>

          <div className="mb-2 mt-2">
            <label for="text" className="form-label font-weight-bold text-left">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" value={registerData.password} onChange={changeHandle} />
          </div>

          <div className="mb-2 mt-2">
            <label for="address" className="form-label font-weight-bold text-left">Address</label>
            <input type="text" className="form-control" id="address" placeholder="Enter Address" name="address" value={registerData.address} onChange={changeHandle} />
          </div>

          <div className="mb-2 mt-2">
            <label for="contact" className="form-label font-weight-bold text-left">Contact</label>
            <input type="text" className="form-control" id="contact" placeholder="Enter Contact No" name="contact" value={registerData.contact} onChange={changeHandle} />
          </div>

          <div className="mb-2 mt-2">
            <label for="role" className="form-label font-weight-bold text-left">Role</label>
            <input type="text" className="form-control" id="role" placeholder="Enter Role" name="role" value={registerData.role} onChange={changeHandle} />
          </div>

          <button type="button" className="btn btn-primary bg-danger p-2 px-5" onClick={addData}>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
