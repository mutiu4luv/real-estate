import React from "react";
import "./hero.css";
import SearchIcon from "@mui/icons-material/Search";
import Heading from "../heading/Heading";
const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your Next Home"
            subtitle="Find New & Featured Properties located in your local city"
          />
          <form className="flex">
            <div className="box">City/Street</div>
            <input type="text" placeholder="location" />

            <div className="box">Property Type</div>
            <input type="text" placeholder="Property Type" />

            <div className="box">Price Range</div>
            <input type="text" placeholder="Price Range" />
            <div className="box">
              <h4>Advanced Filter</h4>
            </div>
            <button className="btn">
              <SearchIcon />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Hero;
