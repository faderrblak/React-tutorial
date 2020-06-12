import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return <div> Hello <strong>Faderr</strong></div>;
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
