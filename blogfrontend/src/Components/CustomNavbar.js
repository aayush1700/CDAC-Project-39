import { NavLink as ReactLink } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function CustomNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
                color="dark"
                dark
                expand="md"
                fixed="top"
                className="px-5"
            >
        <NavbarBrand tag={ReactLink} to='/'>Blogs</NavbarBrand>
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to='/about'>About</NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={ReactLink} to='/Login'>
                Login
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={ReactLink} to='/Signup'>
                Signup
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to='/Services'>Services</DropdownItem>
                <DropdownItem>Contact us</DropdownItem>
                <DropdownItem tag={ReactLink} to='https://instagram.com/blogbadminton?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'>Instagram</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Blogminton</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;