import Results from "../../components/Results";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { key } from "../../components/api";
import classes from "../styles/moviesntvshows.module.css";

function SearchResults() {
  const [fetchedTitle, setFetchedTitle] = useState([]);
  const searchedTitle = useSelector((state) => state.search.searchedTitle);

  useEffect(() => {
    async function fetchTitleData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${searchedTitle}&include_adult=false&language=en-US&page=1&api_key=${key}`
      );
      const data = await response.json();
      const filteredData = data.results.filter(
        (item) => item.media_type !== "person"
      );
      console.log(filteredData);

      const transformedTitle = filteredData.map((item) => {
        return {
          id: item.id,
          title: item.title || item.original_name || item.original_title,
          image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          vote: item.vote_average.toFixed(1),
          voteCount: item.vote_count,
        };
      });

      setFetchedTitle(transformedTitle);
    }
    fetchTitleData();
  }, [searchedTitle]);

  return (
    <>
      <h1 className={classes.sectionTitle}>Results for: {searchedTitle}</h1>
      <Results data={fetchedTitle} />
    </>
  );
}

export default SearchResults;
