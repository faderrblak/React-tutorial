import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css"

const Room = () => {
  const [isLit, setLit] = useState(false);
  const brightness = isLit ? "lit" : "dark";

  return (
    <div className={`room ${brightness}`}>
      The room is {isLit ? 'lit' : 'dark'}
      <br/>
      <button onClick = {() => setLit(!isLit)}>
        flip
      </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById("root"));