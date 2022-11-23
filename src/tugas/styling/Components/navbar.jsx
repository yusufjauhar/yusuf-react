import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav } from "react-bootstrap";
import styled from "styled-components";

const Button = styled.Button`
  color: black;
  font-size: 14px;
  margin-inline: 10px;
`;

export default class Navbar extends React.Component {
  render() {
    return (
      // header
      <div className="header m-3">
        <Nav className="navbar navbar-expand-lg pt-4">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto text-center">
                <a className="nav-link" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Skills
                </a>
                <a className="nav-link" href="#">
                  About
                </a>
              </div>
              <Button className="btn btn-outline-danger rounded-0 d-lg-flex d-block mx-lg-0 mx-auto">Contact Me</Button>
            </div>
          </div>
        </Nav>
        <div className="container">
          <div className="row d-flex align-items-center row-cols-lg-2 row-cols-1">
            <div className="col pt-5 pt-lg-0 mb-lg-0 mb-5">
              <h1 className="fw-bold mb-4">
                Hi! I Am <br />
                Yusuf jauhar alif faqih
              </h1>
              <p className="lh-lg mb-4">Saya adalah seorang product designer yang mendalami front-end developer | UI UX design | adobe photoshop</p>
              <Button className="btn btn-danger rounded-0 me-2 px-sm-4 py-sm-2 px-3 py-2">Hire Me</Button>
              <Button className="btn btn-outline-danger rounded-0 px-sm-4 py-sm-2 px-3 py-2">Know More</Button>
              <div className="d-flex align-items-center mt-4">
                <i class="bi bi-person-plus-fill"></i>
                <p className="lh-lg m-0">
                  Designer and Developer <br /> specialized in front-end Developer
                </p>
              </div>
            </div>
            <div class="col d-flex align-self-end position-relative">
              <img src="../asset/My project-1 (1).png" alt="" class="d-block mx-auto" />
              <img src="../asset/hero-bg.png" alt="" class="position-absolute start-50 bottom-0 translate-middle-x" />
              <img src="../asset/hero-awards.png" alt="" class="position-absolute" />
              <img src="../asset/hero-projects.png" alt="" class="position-absolute" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
