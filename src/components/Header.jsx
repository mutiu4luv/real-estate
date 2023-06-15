import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpeg";
import "./Headers.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav">
            <ul className={toggle ? "small" : "flex"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {/* <li>
                <Link to="/pricing">Pricing</Link>
              </li> */}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="button flex">
            <h4>
              <span>2</span>My List
            </h4>
            <button className="btn1">
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>
          <div className="toggle">
            <button onClick={() => setToggle(!toggle)}>
              {toggle ? (
                // <i className="fa fa-items"></i>
                <CloseIcon />
              ) : (
                // <i className="fa fa-bars"></i>
                <MenuIcon />
              )}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
