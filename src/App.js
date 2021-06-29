import React from "react";

function Potato({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Potato fav="potato1" />
      <Potato fav="potato2" />
      <Potato fav="potato3" />
    </div>
  );
}

export default App;
