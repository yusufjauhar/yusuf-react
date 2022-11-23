import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <section class="about m-3">
          <div class="container">
            <div class="row row-cols-lg-2 row-cols-1 d-flex align-items-center justify-content-between">
              <div class="col position-relative align-self-end mx-auto">
                <img src="../asset/My project-1 (1).png" alt="" />
                <img src="../asset/about-bg.png" alt="" />
              </div>
              <div class="col col-lg-5 text-lg-start text-center">
                <h1 class="fw-bold mb-4">About Me</h1>
                <p class="mb-2">Yusuf Jauhar Alif Faqih </p>
                <p>Banyumas, 15 mei 2002</p>
                <p class="desc lh-lg mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias numquam quaerat odit enim sequi recusandae soluta, voluptate aliquid? Temporibus recusandae voluptatem ex impedit aliquam quae voluptatibus
                  laboriosam perspiciatis iusto!
                </p>
                <div class="brands-icon">
                  <i class="fa-brands fa-html5"></i>
                  <i class="fa-brands fa-css3-alt"></i>
                  <i class="fa-brands fa-js"></i>
                  <i class="fa-brands fa-react"></i>
                  <i class="fa-brands fa-vuejs"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
