import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Form from "../form";
import Hooks from "../Hooks";

import Home from "./aset/contohroute1";

import "../router/aset/style.css";
import Portofolio from "./aset/portfolio";

function ContohRouter() {
  return (
    <BrowserRouter>
      <div>
        <Nav className="yyy">
          <Link className="yyy" to="Home">
            Home
          </Link>
          <Link className="yyy" to="Form">
            Form
          </Link>
          <Link className="yyy" to="Hooks">
            Hooks
          </Link>
          <Link className="yyy" to="Portfolio/About">
            About
          </Link>
        </Nav>
        <hr />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home/" element={<Home />} />
        <Route path="/Hooks/" element={<Hooks />} />
        <Route path="/Form/" element={<Form />} />
        <Route path="/About/:name" element={<Portofolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ContohRouter;
