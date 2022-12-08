import { Card, CardGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios, { Axios } from "axios";
import { useEffect } from "react";

const NavbarInews = () => {
  // useEffect(() => {
  //   Axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=")
  //     .then((result) => {
  //       console.log("data API", result);
  //     })
  //     .catch((err) => {
  //       console.log("error: ", err);
  //     });
  // }, []);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">INEWS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#Genral" id="genral">
                Genral
              </Nav.Link>
              <Nav.Link href="#Business" id="business">
                Business
              </Nav.Link>
              <Nav.Link href="#Sport" id="sport">
                Sport
              </Nav.Link>
              <Nav.Link href="#Technology" id="technology">
                Technology
              </Nav.Link>
              <Nav.Link href="#Entertainment" id="entertainment">
                Entertainment
              </Nav.Link>
            </Nav>
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
};

export default NavbarInews;
