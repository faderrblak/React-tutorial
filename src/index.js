import React from 'react';
import ReactDOM from 'react-dom';

const Reddit = () => {
  const [posts, setPosts] = React.useState([]);

  return (
    <div>
      <h1>/r/react js</h1>
    </div>
  );
}

ReactDOM.render(<Reddit />, document.getElementById("root"));