import { useEffect, useState } from "react";
import Results from "../../../components/Results";
import classes from "../../styles/moviesntvshows.module.css";
import { key } from "../../../components/api";

function TrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const responseTrending = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${key}`
      );
      const dataTrending = await responseTrending.json();
      const transformedTrendingMovies = dataTrending.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          vote: movie.vote_average.toFixed(1),
          voteCount: movie.vote_count,
        };
      });
      setTrendingMovies(transformedTrendingMovies);
    }

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1 className={classes.titlePage}>Movies</h1>
      <div>
        <h2 className={classes.sectionTitle}>Trending</h2>
        <Results data={trendingMovies} />
      </div>
    </>
  );
}

export default TrendingMovies;
