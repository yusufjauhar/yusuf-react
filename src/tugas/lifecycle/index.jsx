import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Inews from "./components/inews";
import ContohLifeCycle from "./components/contohLifeCycle";
export default class Lifecycle extends React.Component {
  // constructor(props){
  //   super(props);

  // }
  render() {
    return (
      <div>
        <ContohLifeCycle />
      </div>
    );
  }
}
