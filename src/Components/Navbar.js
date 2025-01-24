import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} mb-5`}
        style={{ backgroundColor: props.mode === "Light" ? "#343a40": "#002244",}}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/" style={{ color: "white" }}>
          TextUtils
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "white" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: "white" }}>
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onClick={props.toggle}
          />
          <label className="custom-control-label" htmlFor="customSwitch1" style={{ color: "white", userSelect: "none" }}>
            {props.mode === 'Light'? 'Dark Mode': 'Light Mode'}
          </label>
        </div>
      </nav>
    </>
  );
}
