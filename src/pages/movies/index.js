import { useEffect, useState } from "react";
import Items from "../../../components/Items";
import classes from "../../styles/moviesntvshows.module.css";
import { key } from "../../../components/api";

export default function MoviesHomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topratedMovies, setTopratedMovies] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPopularMovies() {
      // setLoading(true);

      // Trending movies
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

      // Upcoming movies
      const responseUpcoming = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=${key}`
      );
      const dataUpcoming = await responseUpcoming.json();
      const transformedUpcomingMovies = dataUpcoming.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          vote: movie.vote_average.toFixed(1),
          voteCount: movie.vote_count,
        };
      });
      setUpcomingMovies(transformedUpcomingMovies);

      // Top Rated movies
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
    fetchPopularMovies();
  }, []);

  return (
    <>
      <h1 className={classes.titlePage}>Movies</h1>
      <div>
        <h2 className={classes.sectionTitle}>Trending</h2>
        <Items data={trendingMovies} hrefProp={"/movies"} />
      </div>

      <div>
        <h2 className={classes.sectionTitle}>Upcoming</h2>
        <Items data={upcomingMovies} hrefProp={"/movies"} />
      </div>

      <div>
        <h2 className={classes.sectionTitle}>Top Rated</h2>
        <Items data={topratedMovies} hrefProp={"/movies"} />
      </div>
    </>
  );
}
