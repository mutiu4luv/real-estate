import { Grid } from "@material-ui/core";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { locations } from "../featured/Arrays";
import Heading from "../heading/Heading";
import "./location.css";

const Location = () => {
  return (
    <div>
      <div className="location padding">
        <div className="container">
          <Heading
            title="Explore By Location"
            subtitle="We Buy And Sell Lands And Other Landed Properties In Nigeria And We Give Our Clients The Best."
          />

          <div className="content grid7 mtop">
            {locations.map((location, item) => {
              return (
                <Grid item key={item} xs={12} sm={6} md={4} lg={3}>
                  <div className="">
                    <Card style={{ width: "18rem", margin: "50px" }}>
                      <Card.Img variant="top" src={location?.image} />
                      <Card.Body>
                        <Card.Title>
                          <h3> {location.name} </h3>
                        </Card.Title>
                        <Card.Text>{location.office}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Grid>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
