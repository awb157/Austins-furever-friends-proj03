import React, { Fragment, useState } from "react";
import "../components/AdoptForm.css";
// import SignUp from "./SignUp";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const AdoptForm = () => {
  const [userFormData, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const handleFormSubmit = async (event) => {
    const { name, value } = event.target;
    console.log(name, value);
  };

  return (
    <div className="adoptform-section">
      <Card bg="danger" className="shadow-lg" style={{ width: "30rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Text>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstName" placeholder="Enter First Name" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="LastName" placeholder="Enter Last Name" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="Enter Primary Contact"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="address" placeholder="Enter Address" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Create Account
              </Button>
              <Button href="/" variant="secondary" type="submit">
                Cancel
              </Button>
            </Form>
            {/* <div className="newuser-container"><SignUp /></div> */}
            <div className="newuser-text-container">
              <h1 className="newuser-title"></h1>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdoptForm;
