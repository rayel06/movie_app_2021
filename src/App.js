import React from "react";

function Food() {
  return <h5>I like Potato</h5>
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Food fav = "kimchi" />  
    </div>
    );
}

export default App;
