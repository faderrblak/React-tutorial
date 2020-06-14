import React, {useState} from "react";
import ReactDOM from "react-dom";

const Room = () => {
  const [isLit, setLit] = useState(false);

  return (
    <div className="room">
      The room is {isLit ? 'lit' : 'dark'}
      <br/>
      <button onClick = {() => setLit(!isLit)}>
        flip
      </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById("root"));