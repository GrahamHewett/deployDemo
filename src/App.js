import React from "react";
import "./App.css";
import movieData from "./moviesDataArray";
import Movie from "./Movie";

function App() {
  return (
    <div className="App">
      <section className="movieGrid">
        {movieData.map((movie) => (
          <Movie image={movie.img} title={movie.title}/>
        ))}
      </section>
    </div>
  );
}

/* <Movie imageSrc={matrix} title='The Matrix'/>
<Movie imageSrc={oa}/>
<Movie imageSrc={gwh}/> */

export default App;