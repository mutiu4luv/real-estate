import { Button, Input } from "@material-ui/core";
import React from "react";
import Heading from "../heading/Heading";
import "./footer.css";
import logo from "../../images/logo.jpeg";
import { footer } from "../featured/Arrays";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1> Do You Have Quesions?</h1>
              <p>We'll help you to grow to your career and growth</p>
            </div>
            <button className="btn5">Contact Us Today </button>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="box">
              <div className="logo">
                <img
                  src={logo}
                  alt=""
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
                <h2>Do You Need Help With Anything?</h2>
                <p>
                  Recieve updates, hot deals,tutorials, discount sent straight
                  to your inbox
                </p>

                <div className="input flex">
                  <input type="text" placeholder="Email Address" />
                  <button> Subscribe</button>
                </div>
              </div>
            </div>

            {/* {footer.map((val) => (
              <div className="box" key={val}>
                <h3>{val.title}</h3>

                <ul>
                  <li> {val.subtitle} </li>
                </ul>
              </div>
            ))} */}
          </div>
        </footer>
        <div
          className="legal
      "
        >
          {" "}
          <span>
            {" "}
            © 2023 Copyright: Mutiu-Real-Estate. Designed By{" "}
            <span style={{ color: "red" }}>Mutiu</span>
          </span>{" "}
        </div>
      </section>
    </>
  );
};

export default Footer;
