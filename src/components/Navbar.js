import React, { Component } from "react";
import { Link } from "react-router-dom"; //since we are using react router
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Flickr Gallery
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/search" className="nav-link">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
