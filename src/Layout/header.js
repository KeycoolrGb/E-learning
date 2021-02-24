import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Assets/Images/logo.png";
import Classes from "./style.module.css";
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} className={Classes.logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeStyle={{ color: "red" }}
                  to="/"
                  className="nav-link"
                  exact
                >
                  Trang Chủ
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeStyle={{ color: "red" }}
                  to="/signup"
                  className="nav-link"
                >
                  Đăng Ký
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ color: "red" }}
                  to="/signin"
                  className="nav-link"
                >
                  Đăng Nhập
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
