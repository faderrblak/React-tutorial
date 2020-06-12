import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return <div> 
    Hello <strong>Faderr</strong>
    <h3>Favorite Foods:</h3>
    <ul>
      <li>Pizza</li>
      <li>Burgers</li>
    </ul>
    
  </div>;
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
