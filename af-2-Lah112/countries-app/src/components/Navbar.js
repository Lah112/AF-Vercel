import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand brand-title" href="/">🌍 Country Explorer</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#regions">Regions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#search">Search</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
