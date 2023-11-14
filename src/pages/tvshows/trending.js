import { useEffect, useState } from "react";
import Results from "../../../components/Results";
import classes from "../../styles/moviesntvshows.module.css";
import { key } from "../../../components/api";

function TrendingTvshows() {
  const [trendingTvshows, setTrendingTvshows] = useState([]);

  useEffect(() => {
    async function fetchTrendingTvshows() {
      const responseTrendingTvshows = await fetch(
        `https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=${key}`
      );
      const dataTrendingTvshows = await responseTrendingTvshows.json();
      const transformedTrendingTvshows = dataTrendingTvshows.results.map(
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
      setTrendingTvshows(transformedTrendingTvshows);
    }

    fetchTrendingTvshows();
  }, []);

  return (
    <>
      <h1 className={classes.titlePage}>TV Shows</h1>
      <div>
        <h2 className={classes.sectionTitle}>Trending</h2>
        <Results data={trendingTvshows} />
      </div>
    </>
  );
}

export default TrendingTvshows;
