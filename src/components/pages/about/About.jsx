import React from "react";
import Back from "../../Back";
import about from "../../../images/about.jpg";
import right from "../../../images/right.jpeg";

import Heading from "../../heading/Heading";
import "./about.css";
const About = () => {
  return (
    <div className="about">
      <Back name="About Us" title="About Us - Who We Are" cover={about} />

      <div className="container flex mtop">
        <div className="left row">
          <Heading
            title="Our Agency Story"
            subtitle="Check Out Our Company Story And Work Process"
          />

          <p>
            Mutius Real Estate Association of Nigeria is a nongovernmental
            organization which operates as MUTIU-REAL-ESTATE in Nigeria. It is
            an association created to promote and growth across the 36 states of
            the federation [including the FCT]. This is currently done under the
            NNPP AND NAFL brand, in partnership with the international
            federation IFAF.
          </p>
          <p>
            Founded In November 2019 by Madu Chibueze, MUTIU-REAL-ESTATE was
            created as a viable platform for interested Nigerian to use the
            Association for both personal and national development. Mutiu
            alongside other founding members seek to raise the standard of the
            Association in Nigeria, facilitating the rise of the Buying and
            Selling Properties to rank alongside other prominent Businesses in
            the country
          </p>
          <button className="btn2"> More About Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
