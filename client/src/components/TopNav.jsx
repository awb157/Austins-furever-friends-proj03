import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./TopNav.css";
import BrandLogo from "../images/pet-house.png";

const TopNav = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <img
          alt=""
          src={BrandLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        <Navbar.Brand href="/">Furever Friends</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/cats">Cats</Nav.Link>
            <Nav.Link href="/dogs">Dogs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/returnuser">
              <Button variant="success">Sign In</Button>{" "}
            </Nav.Link>
            <Nav.Link href="/newuser">
              {" "}
              <Button variant="primary">Create an Account</Button>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
