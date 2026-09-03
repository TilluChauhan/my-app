import React from 'react'

import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
export default function Navbar(props) {

  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">sfd</span></Link>
          </li>
          <li className="nav-item active">
            <Link to="/about" className="nav-link" >{props.aboutText}<span className="sr-only">sfd</span></Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.contactText}</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">Action</a>
              <a className="dropdown-item" href="/">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href='/'>Disabled</a>
          </li>
        </ul>
        <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode} />
          <label className="custom-control-label" htmlFor="customSwitch1">Toggle Mode</label>
        </div>
      </div>
    </nav>

  )
}
Navbar.prototype = {
  title: PropTypes.string,

}
// 3. Default Props Define kiye (Optional: Jab props pass na ho to ye use honge)
Navbar.defaultProps = {
  title: 'Set Title Here',
  aboutText: 'About Us',
  contactText: 'Contact Us'
}
