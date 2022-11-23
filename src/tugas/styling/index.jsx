import React from "react";
import Portofolio from "./Components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./Components/skills";
import About from "./Components/about";
import Footer from "./Components/footer";

export default class Styling extends React.Component {
  render() {
    return (
      <div>
        <Portofolio />
        <Skills />
        <About />
        <Footer />
      </div>
    );
  }
}
