import classes from "./HomePageComponent.module.css";
import { key } from "./api";
import Items from "./Items";
import { useEffect, useState } from "react";
import Link from "next/link";

function HomePageComponent() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTvshows, setTrendingTvshows] = useState([]);

  useEffect(() => {
    async function fetchHomePage() {
      // Trending movies
      const responseTrendingMovies = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${key}`
      );
      const dataTrendingMovies = await responseTrendingMovies.json();
      console.log(dataTrendingMovies);
      const transformedTrendingMovies = dataTrendingMovies.results.map(
        (movie) => {
          return {
            id: movie.id,
            title: movie.title,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            vote: movie.vote_average.toFixed(1),
            voteCount: movie.vote_count,
          };
        }
      );
      setTrendingMovies(transformedTrendingMovies);

      // Trending TV Shows
      const responseTrendingTvshows = await fetch(
        `https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=${key}`
      );
      const dataTrendingTvshows = await responseTrendingTvshows.json();
      const transformedTrendingTvshows = dataTrendingTvshows.results.map(
        (tvshow) => {
          return {
            id: tvshow.id,
            title: tvshow.name,
            image: `https://image.tmdb.org/t/p/w500${tvshow.poster_path}`,
            vote: tvshow.vote_average.toFixed(1),
            voteCount: tvshow.vote_count,
          };
        }
      );
      setTrendingTvshows(transformedTrendingTvshows);
    }

    fetchHomePage();
  }, []);

  return (
    <>
      <h1 className={classes.welcome}>CinemaHub</h1>
      <div className={classes.mntContainer}>
        <Link href={"movies"} className={classes.sectionTitle}>
          Movies
        </Link>
        <Items data={trendingMovies} hrefProp="/movies" />
      </div>

      <div className={classes.mntContainer}>
        <Link href={"tvshows"} className={classes.sectionTitle}>
          TV Shows
        </Link>
        <Items data={trendingTvshows} hrefProp="/tvshows" />
      </div>

      <div className={classes.newsContainer}>
        <h2 className={classes.sectionTitle}>News</h2>
      </div>
    </>
  );
}

export default HomePageComponent;
