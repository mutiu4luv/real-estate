import React from "react";
import { Button } from "react-bootstrap";
import { teams } from "../featured/Arrays";
import Heading from "../heading/Heading";
import "./team.css";
import { CheckCircle, Mail, Phone, Room } from "@material-ui/icons";

const Team = () => {
  return (
    <section className="team background">
      <div>
        {" "}
        <Heading
          title="Our Featured Agents"
          subtitle="Our Agents Are Highly Commendable And Also Trust Worthy, We Always Deliver Efficiectly And Reliably"
        />
      </div>
      <div className="content mtop grid3 ">
        {teams.map((team, index) => {
          return (
            <div className="box" key={index}>
              <button
                className="btn3"
                style={{
                  color: "white",
                  backgroundColor: "green",
                  height: "39px",
                  borderRadius: "50px",
                  fontSize: "20px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {team.list} Listings
              </button>
              <div className="details">
                <div className="img">
                  <img
                    src={team.image}
                    alt="ku"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <CheckCircle className="i" />
                </div>
                <Room />
                <label htmlFor="">{team.office}</label>
                <h4> {team.name}</h4>
                {/* 
<ul>

</ul> */}

                <div className="button flex">
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "green",
                      height: "39px",
                      borderRadius: "50px",
                      fontSize: "20px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Mail />
                    Message
                  </button>

                  <button
                    style={{
                      color: "white",
                      // backgroundColor: "green ",
                      height: "39px",
                      width: "60px",
                      borderRadius: "50px",
                      fontSize: "20px",
                      border: "none",
                      cursor: "pointer",
                    }}
                    className="btn4"
                  >
                    <Phone />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    // <div>
    //   <div className=" content grid3 mtop">
    //     {teams.map((val, index) => {
    //       const { image, sale, address, name, price, type } = val;
    //       return (
    //         <div className="box shado" key={index}>
    //           <div className="img">
    //             <img
    //               src={image}
    //               alt="df"
    //               style={{ height: "50%", width: "50%" }}
    //             />
    //           </div>

    //           <div className="text">
    //             <div className="category flex">
    //               <span
    //                 style={{
    //                   background:
    //                     sale === "for sale" ? "#25b5791a" : "#ff98001a",
    //                   color: sale === "for sale" ? "#25b579" : "#ff9800",
    //                 }}
    //               >
    //                 {sale}{" "}
    //               </span>
    //               {/* <FavoriteIcon className="fav" /> */}
    //             </div>
    //             <h4> {name} </h4>
    //             <p>{/* <LocationOnIcon /> {address} */}</p>
    //           </div>
    //           <div className="button flex">
    //             <div>
    //               <Button
    //                 className="btn2"
    //                 style={{
    //                   color: "white",
    //                   backgroundColor: "green",
    //                   height: "39px",
    //                   borderRadius: "50px",
    //                   fontSize: "20px",
    //                   border: "none",
    //                   cursor: "pointer",
    //                 }}
    //               >
    //                 {" "}
    //                 {price}{" "}
    //               </Button>
    //             </div>
    //             <span>{type}</span>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Team;
