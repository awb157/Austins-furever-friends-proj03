import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../components/DogCardOpened.css";
import CharlieAvatar from "../images/CharlieAvatarVariation1Bigger.png";

const CharlieCardOpened = () => {
  return (
    <div className="dogcardopened-section">
      <Card className="shadow-lg" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={CharlieAvatar} />
        <Card.Body>
          <br></br>
          <Card.Title>
            Hey There! Meet: <b>Charlie</b>
          </Card.Title>
          <br></br>
          <Card.Title>
            <b>Breed:</b> Certified Good Girl
          </Card.Title>
          <Card.Title>
            <b>Age:</b> 8 Months Old
          </Card.Title>
          <Card.Text>Some quick info about this beautiful creature!</Card.Text>
          <div className="openedcard-button-box">
            <Button href="/adoptform" variant="success">
              Rescue Me
            </Button>
            <Button href="/dogs" variant="primary">
              Back to Dogs
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CharlieCardOpened;
