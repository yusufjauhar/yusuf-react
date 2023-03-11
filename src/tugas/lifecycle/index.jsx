import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Inews from "./components/inews";
import ContohLifeCycle from "./components/contohLifeCycle";
import NewsPortal from "./components/inews";
import NewsLifecycle from "./components/inews";

export default class Lifecycle extends React.Component {
  render() {
    return (
      <div>
        <NewsPortal />
      </div>
    );
  }
}
