import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import LaptopIcon from '@material-ui/icons/Laptop';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import './index.css';

const Navbar = () => {
  return (
    <div className="container-fluid nav bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand font-family-base" to="/">
              <img
                src="https://www.piaic.org/static/media/Logo.1624cca8.svg"
                alt="PIAIC"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav_link p-3 text-decoration-none"
                    aria-current="page"
                    to="/"
                  >
                    <HomeIcon></HomeIcon>Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav_link p-3 text-decoration-none"
                    to="/courses"
                  >
                    <LaptopIcon></LaptopIcon>Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav_link p-3 text-decoration-none"
                    to="/about"
                  >
                    <InfoIcon></InfoIcon>About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav_link p-3 text-decoration-none"
                    to="/contact"
                  >
                    <ContactMailIcon></ContactMailIcon> Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
