import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../components/DogCardOpened.css";
import LokiAvatar from "../images/LokiAvatarVariation1Bigger.png";

const LokiCardOpened = () => {
  return (
    <div className="dogcardopened-section">
      <Card className="shadow-lg" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={LokiAvatar} />
        <Card.Body>
          <br></br>
          <Card.Title>
            Hey There! Meet: <b>Loki</b>
          </Card.Title>
          <br></br>
          <Card.Title>
            <b>Breed:</b> Certified Good Boy
          </Card.Title>
          <Card.Title>
            <b>Age:</b> 3 Years Old
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

export default LokiCardOpened;
