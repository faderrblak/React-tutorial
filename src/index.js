import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hi(props) {
  return <div className="practice"> 
    <h1>Hello <strong>{props.name}</strong></h1>
    <h3>Favorite Foods:</h3>
    <ul>
      <li>Pizza</li>
      <li>Burgers</li>
    </ul>
    {2+5}
  </div>;
}

const MediaCard = ({title, body, imageUrl}) => {
  return <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <img src={imageUrl} alt=""/>
  </div>;
}

const Gate = ({isOpen}) => {
  return <div>
    {isOpen === true ? "open" : "closed"}
  </div>
}

ReactDOM.render(<Hi name="Faderr"/>, document.querySelector("#root"));
ReactDOM.render(<MediaCard title="Foods" body="Foods I like are:" imageUrl="https://d1ralsognjng37.cloudfront.net/ac696fa3-87ad-4974-a132-9be796b19a39.jpeg"/>, document.querySelector("#root"));
ReactDOM.render(<Gate isOpen={false}/>, document.querySelector("#root"));