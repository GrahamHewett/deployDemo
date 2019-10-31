import React from "react";
import avatar from "./images/avatar.jpg";
import elem5 from "./images/elem5.jpg";
import drStrange from "./images/drStrange.jpg";
import gwh from "./images/gwh.jpg";
import matrix from "./images/matrix.jpg";
import oa from "./images/oa.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="movieCoverRow">
        <figure className="movie">
          <img src={matrix} alt="matrix movie cover" />
        </figure>
        <figure className="movie">
          <img src={oa} alt="The OA TV show cover" />
        </figure>
        <figure className="movie">
          <img src={gwh} alt="Good Will Hunting movie cover" />
        </figure>
      </section>
      <section className="movieCoverRow">
        <figure className="movie">
          <img src={avatar} alt="Avatar movie cover" />
        </figure>
        <figure className="movie">
          <img src={elem5} alt="The Fifth Element movie cover" />
        </figure>
        <figure className="movie">
          <img src={drStrange} alt="Dr Strange movie cover" />
        </figure>
      </section>
    </div>
  );
}

export default App;
