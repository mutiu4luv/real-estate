import React, { useState } from "react";
import { productItems } from "./Arrays";
// import Data from "./Arrays";

const FeaturedCard = () => {
  return (
    <div className="content grid5 mtop">
      {productItems.map((booking) => {
        return (
          <div className="box">
            <img src={booking?.image} alt="df" />

            <h4>{booking?.house}</h4>
            <label>{booking?.property}</label>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedCard;
