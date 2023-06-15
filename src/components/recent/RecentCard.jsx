import React from "react";
import { houses } from "../featured/Arrays";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "react-bootstrap";
import "./recent.css";
const RecentCard = () => {
  return (
    <div>
      <div className=" content grid3 mtop">
        {houses.map((val, index) => {
          const { image, sale, address, name, price, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={image} alt="df" />
              </div>

              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        sale === "for sale" ? "#25b5791a" : "#ff98001a",
                      color: sale === "for sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {sale}{" "}
                  </span>
                  <FavoriteIcon className="fav" />
                </div>
                <h4> {name} </h4>
                <p>
                  <LocationOnIcon /> {address}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <Button
                    className="btn2"
                    style={{
                      color: "white",
                      backgroundColor: " #27ae60",
                      height: "39px",
                      borderRadius: "50px",
                      fontSize: "20px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    {price}{" "}
                  </Button>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentCard;
