import CustomNavbar from "./CustomNavbar";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <CustomNavbar />
<<<<<<< HEAD
=======
      <h1></h1>
      <h1></h1>
>>>>>>> 3fd4478bce6a0193fbfa8a6922320520c7fa934a
      <br></br>
      <br></br>
      <br></br>
      
      {children}
      
    </div>
  );
};

export default Base;
