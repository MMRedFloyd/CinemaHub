import { useEffect, useState } from "react";
import Results from "../../../components/Results";
import classes from "../../styles/moviesntvshows.module.css";
import { key } from "../../../components/api";

function TopratedMovies() {
  const [topratedMovies, setTopratedMovies] = useState([]);

  useEffect(() => {
    async function fetchUpcomingMovies() {
      const responseToprated = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=${key}`
      );
      const dataToprated = await responseToprated.json();
      const transformedTopratedMovies = dataToprated.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          vote: movie.vote_average.toFixed(1),
          voteCount: movie.vote_count,
        };
      });
      setTopratedMovies(transformedTopratedMovies);
    }

    fetchUpcomingMovies();
  }, []);

  return (
    <>
      <h1 className={classes.titlePage}>Movies</h1>
      <div>
        <h2 className={classes.sectionTitle}>Upcoming</h2>
        <Results data={topratedMovies} />
      </div>
    </>
  );
}

export default TopratedMovies;
