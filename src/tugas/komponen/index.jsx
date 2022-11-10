import React from "react";
import Classcomponent from "./pembahasan/classcomponent";
import Funcionalcomponent from "./pembahasan/funcionalcomponent";
export default class komponen extends React.Component {
  render() {
    return (
      <div>
        <Classcomponent nama="kamu nenye" />
        <Funcionalcomponent ml="mobil lejenn" />
      </div>
    );
  }
}
