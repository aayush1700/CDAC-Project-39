import CustomNavbar from "./CustomNavbar";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <CustomNavbar />
      <h1></h1>
      <h1></h1>
      <br></br>
      {children}
      
    </div>
  );
};

export default Base;
