import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "10px",
        padding: "10px",
        fontSize: "medium",
      }}
    >
      {movies.map((eachMovie) => {
        return (
          <MovieCard
            title={eachMovie.title}
            description={eachMovie.description}
            posterURL={eachMovie.posterURL}
            rating={eachMovie.rating}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
