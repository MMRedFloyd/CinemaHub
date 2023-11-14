import { useEffect, useState } from "react";
import Results from "../../../components/Results";
import classes from "../../styles/moviesntvshows.module.css";
import { key } from "../../../components/api";

function TopratedTvshows() {
  const [topratedTvshows, setTopratedTvshows] = useState([]);

  useEffect(() => {
    async function fetchTopratedTvshows() {
      const responseTopratedTvshows = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?language=en-US&api_key=${key}`
      );
      const dataTopratedTvshows = await responseTopratedTvshows.json();
      const transformedTopratedTvshows = dataTopratedTvshows.results.map(
        (movie) => {
          return {
            id: movie.id,
            title: movie.name,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            vote: movie.vote_average.toFixed(1),
            voteCount: movie.vote_count,
          };
        }
      );
      setTopratedTvshows(transformedTopratedTvshows);
    }

    fetchTopratedTvshows();
  }, []);

  return (
    <>
      <h1 className={classes.titlePage}>TV Shows</h1>
      <div>
        <h2 className={classes.sectionTitle}>Top Rated</h2>
        <Results data={topratedTvshows} />
      </div>
    </>
  );
}

export default TopratedTvshows;
