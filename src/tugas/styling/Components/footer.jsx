import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer class="bg-light mt-4">
          <div class="footer-content">
            <h3>Yusuf Jauhar</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo ea accusantium quis sapiente quisquam mollitia sunt odit blanditiis sed, ut at eaque minima cumque sit dolorem dolorum placeat voluptatibus!</p>
            <ul class="sosmed">
              <li>
                <img src="../asset/sosmed/facebook.png" class="fa fa-facebook" />
              </li>
              <li>
                <img src="../asset/sosmed/instagram.png" class="fa fa-instagram" />
              </li>
            </ul>
            <div class="footer-menu">
              <ul class="f-menu">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Skills</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
