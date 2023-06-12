import React from "react";
import Award from "../award/Award";
import Featured from "../featured/Featured";
import Hero from "../hero/Hero";
import Location from "../location/Location";
import Recent from "../recent/Recent";
import Team from "../team/Team";

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Recent />
      <Award />
      <Location />
      <Team />
    </div>
  );
};

export default Home;
