import React from "react";
import Heading from "../heading/Heading";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <div>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Property Listed"
            subtitle="This properties are 100% authentic and free from Government, mutiu's properties are always ready to give you the best. "
          />
          <RecentCard />
        </div>
      </section>
    </div>
  );
};

export default Recent;
