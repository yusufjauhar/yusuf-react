import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Nav } from "react-bootstrap";

export default class Inews extends React.Component {
  render() {
    return (
      <div>
        <div ClassName="container-fluid m-0 p-0">
          <div>
            <Nav ClassName="navbar navbar-expand-lg navbar-dark bg-dark">
              <div ClassName="container-fluid">
                <a ClassName="navbar-brand text-warning" href="#">
                  Inews
                </a>
                <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span ClassName="navbar-toggler-icon"></span>
                </button>
                <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul ClassName="navbar-nav me-auto mb-2 mb-lg-0">
                    <li ClassName="nav-item">
                      <a ClassName="nav-link" aria-current="page" href="#genral" id="genral">
                        Genral
                      </a>
                    </li>
                    <li ClassName="nav-item">
                      <a ClassName="nav-link" aria-current="page" href="#business" id="business">
                        Business
                      </a>
                    </li>
                    <li ClassName="nav-item">
                      <a ClassName="nav-link" href="#sports" id="sport">
                        Sports
                      </a>
                    </li>
                    <li ClassName="nav-item">
                      <a ClassName="nav-link" aria-current="page" href="#tehnology" id="technology">
                        Technology
                      </a>
                    </li>
                    <li ClassName="nav-item">
                      <a ClassName="nav-link" href="#entertainment" id="entertainment">
                        Entertainment
                      </a>
                    </li>
                  </ul>
                  <Form ClassName="d-flex">
                    <input ClassName="form-control me-2" type="text" id="newsQuery" placeholder="Search news" />
                    <button ClassName="btn btn-outline-warning" type="button" id="searchBtn">
                      Search
                    </button>
                  </Form>
                </div>
              </div>
            </Nav>
          </div>

          <div>
            <div ClassName="row m-3" id="newsType"></div>
            <div ClassName="row me-2 ms-2" id="newsdetails"></div>
          </div>
        </div>
      </div>
    );
  }
}
