import { useEffect, useState } from "react";
import Items from "../../components/Items";
import classes from "../styles/moviesntvshows.module.css";
import { key } from "../../components/api";

export default function MoviesHomePage() {
  const [popularMovies, setPopularMovies] = useState({});

  useEffect(() => {
    async function fetchPopularMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${key}`
      );
      const data = await response.json();
      console.log(data);

      const transformedPopularMovies = data.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          genresIds: movie.genre_ids,
          image: movie.poster_path,
        };
      });

      setPopularMovies(transformedPopularMovies);
    }
    fetchPopularMovies();
  }, []);

  return (
    <>
      <h1 className={classes.titlePage}>Movies</h1>
      <div>
        <h2 className={classes.sectionTitle}>Popular</h2>
        <Items movies={popularMovies} />
      </div>

      <div>
        <h2 className={classes.sectionTitle}>Upcoming</h2>
        {/* <Items /> */}
      </div>

      <div>
        <h2 className={classes.sectionTitle}>Top Rated</h2>
        {/* <Items /> */}
      </div>
    </>
  );
}
