import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav } from "react-bootstrap";

export default class Skills extends React.Component {
  render() {
    return (
      <div>
        <section class="skills d-flex align-items-center pt-md-0 pt-5">
          <div class="container">
            <h1 class="m-5 fw-bold text-center mb-5 ">Skills</h1>
            <div class="row text-center d-flex justify-content-between justify-content-lg-evenly">
              <div class="col col-md-3 col-12">
                <i class="fa-solid fa-layer-group"></i>
                <h6 class="opacity-50 my-1">0 Years -</h6>
                <h5 class="fw-bold">front-end developer</h5>
              </div>
              <div class="col col-md-3 col-12">
                <i class="fa-solid fa-pen-ruler"></i>
                <h6 class="opacity-50 my-1">0 Years -</h6>
                <h5 class="fw-bold">UI UX design</h5>
              </div>
              <div class="col col-md-3 col-12">
                <i class="fa-solid fa-pen-nib"></i>
                <h6 class="opacity-50 my-1">0 Years -</h6>
                <h5 class="fw-bold">adobe photoshop</h5>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
