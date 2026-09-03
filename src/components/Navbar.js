import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">{props.contactText}</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="#">Action</Link>
              <Link className="dropdown-item" to="#">Another action</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="#">Something else here</Link>
            </div>
          </li>
        </ul>
        
        <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode} />
          <label className="custom-control-label" htmlFor="customSwitch1">Toggle Mode</label>
        </div>
      </div>
    </nav>
  );
}

// Fixed 'prototype' to 'propTypes'
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  contactText: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set Title Here',
  aboutText: 'About Us',
  contactText: 'Contact Us'
};