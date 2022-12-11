import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Inews from "./components/inews";
import ContohLifeCycle from "./components/contohLifeCycle";
import NewsPortal from "../Hooks/news.jsx/navbar";
import NewsLifecycle from "./components/inews";

export default class Lifecycle extends React.Component {
  render() {
    return (
      <div>
        <NewsLifecycle />
      </div>
    );
  }
}
