import React from "react";
import Back from "../Back";
import about from "././../../images/about.jpg";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact mb">
        <Back
          title="Get Helps & Friendly Supports"
          name=" Contact Us"
          cover={about}
        />

        <div className="container">
          <form action="" className="shadow">
            <h4> Fillup The Form</h4>

            <div>
              <input type="text" placeholder="Name" name="" />
              <input type="text" placeholder="Email" name="" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="10">
              {" "}
            </textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
