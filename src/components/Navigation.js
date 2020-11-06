import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png';
import contactUs from '../assets/images/contactUs.svg';
import logout from '../assets/images/logout.svg';

import { navigationItems } from '../data/navigationJsonData';

import { history } from '../AppRouter';

import '../assets/styles/Navigation.css';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navigationContainer">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="noImage" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {navigationItems.map((navigationItem, index) => {
              return (
                <div>
                  <NavItem
                      key={index}
                      href={navigationItem.link}
                    >
                      <Link to={navigationItem.link} onClick={() => history.push(`${navigationItem.link}`)}>
                        {navigationItem.title}
                      </Link>
                  </NavItem>
                  <div className="nav-item-bottom"></div>
                </div>
              )
            })}
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <Button className="demo-dashboard-btn">Demo Dashboard</Button>
          <img className="contact-us" src={contactUs} alt="noImage" />
          <img className="logout" src={logout} alt="noImage" />
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;