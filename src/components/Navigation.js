import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Navbar,
  Nav,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';
import navigationItems from '../mocks/navigations.json';

import logo from '../assets/images/logo.png';
import contactUs from '../assets/images/contactUs.svg';
import logout from '../assets/images/logout.svg';

import { history } from '..';

import "react-toggle/style.css";
import '../assets/styles/Navigation.scss';

const Navigation = (props) => {
  const dispatch = useDispatch()
  const colorMode = useSelector(state => state.toggle.colorMode);
  const selectedNavTabIndex = useSelector(state => state.navigate.selectedNavTabIndex);

  const handleMode = () => {
    if(!colorMode) {
      dispatch({ type: 'TOGGLE_DARK_MODE', payload: true })
    } else {
      dispatch({ type: 'TOGGLE_DARK_MODE', payload: false })
    }
  }

  return (
    <div className="navigationContainer">
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: !colorMode ? '#FFFFFF' : '#242424' }}>
        <Navbar.Brand>
          <Link to="/" style={{ marginRight: 10 }} onClick={() => dispatch({ type: 'UPDATE_SELECTED_NAV_TAB_INDEX', payload: 0 })}>
            <img src={logo} alt="noImage" height="40" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {navigationItems && navigationItems.map((navigationItem, index) => {
              return (
                <div key={index}>
                  <Nav.Link to={navigationItem.link}
                    className={selectedNavTabIndex === navigationItem.id ? 'selectedNavTab' : ""}
                    onClick={() => {
                      history.push(`${navigationItem.link}`)
                      dispatch({ type: 'UPDATE_SELECTED_NAV_TAB_INDEX', payload: navigationItem.id })
                    }}
                    style={{ color: colorMode ? '#FFFFFF' : '#242424' }}
                  >
                    {navigationItem.title}
                  </Nav.Link>
                </div>
              )
            })}
          </Nav>
          <Nav className="nav-right">
            <Button className="demo-dashboard-btn">Demo Dashboard</Button>
            <div>
              <img className="contact-us" src={contactUs} alt="noImage" />
              <img className="logout" src={logout} alt="noImage" />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                <Toggle
                  defaultChecked={colorMode}
                  icons={false}
                  onChange={() => handleMode()}
                />
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;