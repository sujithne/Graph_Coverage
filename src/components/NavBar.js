import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'; 

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom-grey">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" width="30" height="30" className="d-inline-block align-center me-2" />
          Graph Coverage
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/generate">Generate</Link>
            <Link className="nav-link" to="/example">Example</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;