import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
   <nav className="navbar navbar-expand navbar-light bg-success fixed-top">

        <div className="container">
          <Link to={'/'} className="navbar-brand"><i class="fa fa-home mx-2" aria-hidden="true"></i>Home</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={'/login'} className="nav-link"><i class="fa fa-sign-in mx-2" aria-hidden="true"></i>Login</Link>
              </li>
              <li className="nav-item">
                <Link to={'/register'} className="nav-link"><i class="fa fa-sign-in mx-2" aria-hidden="true"></i>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

