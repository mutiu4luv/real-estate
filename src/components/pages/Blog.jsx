import React from "react";
import Back from "../Back";
import RecentCard from "../recent/RecentCard";
import services from "././../../images/services.jpg";

const Blog = () => {
  return (
    <div>
      <section className="blog-out mb">
        <Back title="Blog - Grid,Our Blog " name="Blog " cover={services} />
        <div className="container recent">
          <RecentCard />
        </div>
      </section>
    </div>
  );
};

export default Blog;
