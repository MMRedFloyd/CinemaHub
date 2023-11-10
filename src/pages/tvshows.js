import { useEffect, useState } from "react";
import Items from "../../components/Items";
import classes from "../styles/moviesntvshows.module.css";
import { key } from "../../components/api";

export default function TvshowsHomePage() {
  const [trendingTvshows, setTrendingTvshows] = useState([]);
  const [upcomingTvshows, setUpcomingTvshows] = useState([]);
  const [topratedTvshows, setTopratedTvshows] = useState([]);

  useEffect(() => {
    async function fetchTvshows() {
      // Trending TV Shows
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

      // Upcoming TV Shows
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

      // Top Rated TV Shows
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

    fetchTvshows();
  }, []);

  return (
    <>
      <h1 className={classes.titlePage}>TV Shows</h1>
      <div>
        <h2 className={classes.sectionTitle}>Trending</h2>
        <Items data={trendingTvshows} />
      </div>

      <div>
        <h2 className={classes.sectionTitle}>Upcoming</h2>
        <Items data={upcomingTvshows} />
      </div>

      <div>
        <h2 className={classes.sectionTitle}>Top Rated</h2>
        <Items data={topratedTvshows} />
      </div>
    </>
  );
}
