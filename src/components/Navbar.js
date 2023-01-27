import React from "react";
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
            {/* <li className="nav-item">
              <a className="nav-link active" href="/about">{props.aboutText}</a>
            </li> */}
          </ul>

          <div className={`form-check mx-2 text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.darkMode}/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Dark
            </label>
          </div>
          <div className={`form-check mx-2 text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={props.lightMode}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Light
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,    
    aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About Us"
}