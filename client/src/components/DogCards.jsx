import React from "react";
import LokiAvatar from "../images/LokiAvatarVariation1Bigger.png";
import LunaAvatar from "../images/LunaAvatarVariation1Bigger.png";
import CharlieAvatar from "../images/CharlieAvatarVariation1Bigger.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./DogCards.css";

const DogCards = () => {
  return (
    <Container className="dog-card-cont">
      <Row>
        <Col>
          <Card className="shadow-lg text-center" style={{ width: "25rem" }}>
            <Card.Img variant="top" src={LunaAvatar} />
            <Card.Body>
              <Card.Title>Luna</Card.Title>
              <Card.Text></Card.Text>
              <Button href="/lunadog" variant="primary">
                Rescue Me
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Status: Ready for Adoption</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-lg text-center" style={{ width: "25rem" }}>
            <Card.Img variant="top" src={LokiAvatar} />
            <Card.Body>
              <Card.Title>Loki</Card.Title>
              <Card.Text></Card.Text>
              <Button href="/lokidog" variant="primary">
                Rescue Me
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Status: Ready for Adoption</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-lg text-center" style={{ width: "25rem" }}>
            <Card.Img variant="top" src={CharlieAvatar} />
            <Card.Body>
              <Card.Title>Charlie</Card.Title>
              <Card.Text></Card.Text>
              <Button href="/charliedog" variant="primary">
                Rescue Me
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Status: Ready for Adoption</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DogCards;
