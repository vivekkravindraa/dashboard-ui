import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';

import logo from '../assets/images/logo.png';
import contactUs from '../assets/images/contactUs.svg';
import logout from '../assets/images/logout.svg';

import { navigationItems } from '../data/navigationJsonData';

import { history } from '../AppRouter';

import "react-toggle/style.css";
import '../assets/styles/Navigation.css';

const Navigation = (props) => {
  const dispatch = useDispatch()
  const colorMode = useSelector(state => state.colorMode);
  const selectedNavTabIndex = useSelector(state => state.selectedNavTabIndex);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleMode = () => {
    if(!colorMode) {
      dispatch({ type: 'TOGGLE_DARK_MODE', payload: true })
    } else {
      dispatch({ type: 'TOGGLE_DARK_MODE', payload: false })
    }
  }

  return (
    <div className="navigationContainer" style={{ backgroundColor: !colorMode ? 'white !important' : 'black !important' }}>
      <Navbar color="light" light expand="md" >
        <Link to="/" style={{ marginRight: 10 }} onClick={() => dispatch({ type: 'UPDATE_SELECTED_NAV_TAB_INDEX', payload: 0 })}>
          <img src={logo} alt="noImage" height="40" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {navigationItems.map((navigationItem, index) => {
              return (
                <div key={index}>
                  <NavItem
                      href={navigationItem.link}
                    >
                      <Link to={navigationItem.link} onClick={() => {
                          history.push(`${navigationItem.link}`)
                          dispatch({ type: 'UPDATE_SELECTED_NAV_TAB_INDEX', payload: navigationItem.id })
                        }
                      }>
                        {navigationItem.title}
                      </Link>
                  </NavItem>
                  <div className={`nav-item-bottom ${navigationItem.id === selectedNavTabIndex ? 'selectedNavTab' : ''}`}></div>
                </div>
              )
            })}
          </Nav>
          <Button className="demo-dashboard-btn">Demo Dashboard</Button>
          <img className="contact-us" src={contactUs} alt="noImage" />
          <img className="logout" src={logout} alt="noImage" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
            <small>Mode</small>
            <Toggle
              defaultChecked={colorMode}
              icons={false}
              onChange={() => handleMode()}
            />
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;