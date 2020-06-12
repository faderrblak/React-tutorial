import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hi() {
  return <div className="practice"> 
    Hello <strong>Faderr</strong>
    <h3>Favorite Foods:</h3>
    <ul>
      <li>Pizza</li>
      <li>Burgers</li>
    </ul>
    {2+5}
  </div>;
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
