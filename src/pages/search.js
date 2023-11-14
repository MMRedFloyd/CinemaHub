import Results from "../../components/Results";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { key } from "../../components/api";
import classes from "../styles/moviesntvshows.module.css";

function SearchResults() {
  const [fetchedTitle, setFetchedTitle] = useState([]);
  const [page, setPage] = useState(1);
  const searchedTitle = useSelector((state) => state.search.searchedTitle);

  // const bottomRef = useRef(null);

  useEffect(() => {
    async function fetchTitleData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${searchedTitle}&include_adult=false&language=en-US&page=${page}&api_key=${key}`
      );
      const data = await response.json();
      console.log(data);
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

      // setFetchedTitle((prevData) => [...prevData, ...transformedTitle]);
      setFetchedTitle(transformedTitle);
    }
    // setPage(1);
    // setFetchedTitle([]);
    fetchTitleData();
  }, [searchedTitle]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting) {
  //         console.log("Reached bottom of the page!");
  //         setPage((prevPage) => prevPage + 1);
  //       }
  //     },
  //     { threshold: 0.1 } // Adjust threshold as needed
  //   );

  //   observer.observe(bottomRef.current);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [bottomRef]);

  // function handleScroll(entries) {
  //   const isIntersecting = entries[0].isIntersecting;

  //   if (isIntersecting && pageRef.current !== page) {
  //     console.log("Reached bottom of the page!");
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // }

  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });

  //   if (bottomRef.current) {
  //     observer.observe(bottomRef.current);
  //   }

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [bottomRef, page]);

  // function handleScroll() {
  //   const threshold = 100; // Adjust this value as needed

  //   const isBottom =
  //     window.innerHeight + document.documentElement.scrollTop + threshold >=
  //     document.body.offsetHeight;

  //   console.log("Scrolling...");
  //   console.log("Window height:", window.innerHeight);
  //   console.log("Document scroll top:", document.documentElement.scrollTop);
  //   console.log("Document offset height:", document.body.offsetHeight);

  //   if (isBottom) {
  //     console.log("Reached bottom of the page!");
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <h1 className={classes.sectionTitle}>Results for: {searchedTitle}</h1>
      <Results data={fetchedTitle} />
      {/* <div ref={bottomRef} style={{ height: "10px" }}></div> */}
    </>
  );
}

export default SearchResults;
