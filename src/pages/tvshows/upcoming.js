import { useEffect, useState } from "react";
import Results from "../../../components/Results";
import classes from "../../styles/moviesntvshows.module.css";
import { key } from "../../../components/api";

function UpcomingTvshows() {
  const [upcomingTvshows, setUpcomingTvshows] = useState([]);

  useEffect(() => {
    async function fetchUpcomingTvshows() {
      const responseUpcomingTvshows = await fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&api_key=${key}`
      );
      const dataUpcomingTvshows = await responseUpcomingTvshows.json();
      const transformedUpcomingTvshows = dataUpcomingTvshows.results.map(
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
      setUpcomingTvshows(transformedUpcomingTvshows);
    }

    fetchUpcomingTvshows();
  }, []);

  return (
    <>
      <h1 className={classes.titlePage}>TV Shows</h1>
      <div>
        <h2 className={classes.sectionTitle}>Upcoming</h2>
        <Results data={upcomingTvshows} />
      </div>
    </>
  );
}

export default UpcomingTvshows;
