// import React, { useState, } from "react";
// import { useQuery, useMutation} from "@apollo/client";
// import { QUERY_ME } from "../utils/queries";
import MiloAvatar from "../images/MiloAvatarVariation1Bigger.png";
import OliverAvatar from "../images/OliverAvatarVariation1Bigger.png";
import WhiskeyAvatar from "../images/WhiskeyAvatarVariation1Bigger.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "../components/CatCards.css";

const CatCards = () => {
  //   const [cats, setCats] = useState([]);
  //   const {loading, data} = useQuery(QUERY_ME);
  //   const userData =data?.me;
  //   // console.log(userData);

  return (
    <Container className="cat-card-cont">
      <Row>
        <Col>
          <Card className="shadow-lg text-center" style={{ width: "25rem" }}>
            <Card.Img variant="top" src={WhiskeyAvatar} />
            <Card.Body>
              <Card.Title>Whiskey</Card.Title>
              <Card.Text></Card.Text>
              <Button href="/whiskeycat" variant="primary">
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
            <Card.Img variant="top" src={MiloAvatar} />
            <Card.Body>
              <Card.Title>Milo</Card.Title>
              <Card.Text></Card.Text>
              <Button href="/milocat" variant="primary">
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
            <Card.Img variant="top" src={OliverAvatar} />
            <Card.Body>
              <Card.Title>Oliver</Card.Title>
              <Card.Text></Card.Text>
              <Button href="/olivercat" variant="primary">
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

export default CatCards;
