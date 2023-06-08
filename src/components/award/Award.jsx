import React from "react";
import "./award.css";
import Heading from "../heading/Heading";
import { awards } from "../featured/Arrays";

const Award = () => {
  return (
    <div>
      <section className="awards padding">
        <div className="container">
          <Heading
            title="Over 1,232,321+ Happy Users Being With Us Still The Love Our Services "
            subtitle="  Our Awards"
          />
          <div className="content grid4 mtop">
            {awards.map((award, index) => {
              return (
                <div className="box" key={index}>
                  <div className="icon">
                    <span>{award.image}</span>
                  </div>

                  <h1>{award.money} </h1>
                  <p>{award.award} </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Award;
