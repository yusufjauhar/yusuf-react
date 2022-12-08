import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "../components/style.css";

export default class Inews extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">INEWS</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" id="newsQuery" />
                <Button variant="outline-success" id="searchBtn">
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <div ClassName="row m-3" id="newsType"></div>
          <div ClassName="row me-2 ms-2" id="newsdetails"></div>
        </div>
      </div>
    );
  }
}
