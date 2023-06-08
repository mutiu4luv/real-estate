import React from "react";
import Heading from "../heading/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <section className="featured background">
      <div className="container">
        <Heading
          title="Featured Property Types"
          subtitle="Find All Type Of Property."
        />
        <FeaturedCard />
      </div>
    </section>
  );
};

export default Featured;
