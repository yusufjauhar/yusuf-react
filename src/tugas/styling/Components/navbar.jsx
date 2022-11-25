import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import "../Components/css/style.css";
import Img1 from "../Components/asset/My project-1 (1).png";
import Img2 from "../Components/asset/hero-bg.png";
import Img3 from "../Components/asset/hero-awards.png";
import Img4 from "../Components/asset/hero-projects.png";

export default class Navbar extends React.Component {
  render() {
    return (
      // header
      <div className="header m-3">
        <Nav className="navbar navbar-expand-lg pt-4">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto text-center">
                <a className="nav-link" href="navbar.jsx">
                  Home
                </a>
                <a className="nav-link" href="skills.jsx">
                  Skills
                </a>
                <a className="nav-link" href="about.jsx">
                  About
                </a>
              </div>
              <button className="btn btn-outline-danger rounded-0 d-lg-flex d-block mx-lg-0 mx-auto" href="https://api.whatsapp.com/send?phone=6287831562908">
                Contact Me
              </button>
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
              <button className="btn btn-danger rounded-0 me-2 px-sm-4 py-sm-2 px-3 py-2">Hire Me</button>
              <button className="btn btn-outline-danger rounded-0 px-sm-4 py-sm-2 px-3 py-2">Know More</button>
              <div className="d-flex align-items-center mt-4">
                <i className="bi bi-person-plus-fill"></i>
                <p className="lh-lg m-0">
                  Designer and Developer <br /> specialized in front-end Developer
                </p>
              </div>
            </div>
            <div class="col d-flex align-self-end position-relative">
              <img src={Img1} className="d-block mx-auto" />
              <img src={Img2} className="position-absolute start-50 bottom-0 translate-middle-x" />
              <img src={Img3} className="position-absolute" />
              <img src={Img4} className="position-absolute" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
