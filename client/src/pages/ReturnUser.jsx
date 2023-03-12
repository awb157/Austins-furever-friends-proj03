import React from "react";
import "../components/ReturnUser.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
// import SignIn from "./SignIn";

const ReturnUser = () => {
  const handleFormSubmit = async (event) => {
    const { name, value } = event.target;
    console.log(name, value);
  };

  return (
    <div className="returninguser-section">
      <Card bg="primary" className="shadow-lg" style={{ width: "30rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Text>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button href="loggedin" variant="success" type="submit">
                Sign In
              </Button>
              <Button href="/" variant="secondary" type="submit">
                Cancel
              </Button>
            </Form>
            {/* <div className="newuser-container"><SignUp /></div> */}
            <div href="loggedin" className="newuser-text-container">
              <h1 className="newuser-title"></h1>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReturnUser;
