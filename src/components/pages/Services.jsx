import React from "react";
import Back from "../Back";
import FeaturedCard from "../featured/FeaturedCard";
import services from "././../../images/services.jpg";

const Services = () => {
  return (
    <div>
      <section className="services mb ">
        <Back
          title="Service - All Services"
          name=" Services"
          cover={services}
        />
        <div className="featured container">
          <FeaturedCard />
        </div>
      </section>
    </div>
  );
};

export default Services;
