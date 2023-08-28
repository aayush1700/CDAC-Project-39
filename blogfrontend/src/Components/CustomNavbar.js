import React, { useEffect, useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";
import { doLogout, getCurrentUserDetails, isLoggedIn } from "../pages/Auth";

function CustomNavbar(args) {

  let navigate =useNavigate() 

  const [isOpen, setIsOpen] = useState(false);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetails());
  }, [login]);

  const toggle = () => setIsOpen(!isOpen);

  const logout=()=>{
    doLogout(()=>{
      setLogin(false)
      navigate("/")
    })
  }
  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top" className="px-5">
        <NavbarText> </NavbarText>
        <NavbarBrand tag={ReactLink} to="/">
          {" "}
          Blogminton Blogs
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/Services">
                Services
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/Services">
                  Services
                </DropdownItem>
                <DropdownItem>Contact us</DropdownItem>
                <DropdownItem
                  tag={ReactLink}
                  to="https://instagram.com/blogbadminton?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                >
                  Instagram
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav navbar>
            {login && (
              <>
              <NavItem>
                  <NavLink tag={ReactLink} to="/user/profile-info">Profile-Info</NavLink>
                </NavItem>
               
                <NavItem>
                  <NavLink tag={ReactLink} to="/user/dashboard">{user.email}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={logout}>Logout</NavLink>
                </NavItem>
              </>
            )}
            {
              !login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/Login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/Signup">
                    Signup
                  </NavLink>
                </NavItem>
              </>
              )
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
