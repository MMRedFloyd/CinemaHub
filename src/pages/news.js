import { useEffect, useState } from "react";
import classes from "../styles/ItemDetails.module.css";
import { key } from "../../components/api";
import { BsStar } from "react-icons/bs";

export default function ItemDetails() {
  const [details, setDetails] = useState([]);
  const id = "872585";

  useEffect(() => {
    async function fetchItemDetails() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${key}`
      );
      const data = await response.json();
      console.log(data);
      const transformedDetails = {
        id: data.id,
        title: data.original_title || data.title,
        image: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
        genres: data.genres,
        overview: data.overview,
        releaseDate: data.release_date,
        runtime: data.runtime,
        tagline: data.tagline,
        vote: data.vote_average,
        voteCount: data.vote_count,
      };

      setDetails(transformedDetails);
      console.log(details);
    }
    fetchItemDetails();
  }, []);
  console.log(details);

  return (
    <>
      <div className={classes.detailsContainer}>
        <div className={classes.header}>
          <div className={classes.contentOnImg}>
            <h1 className={classes.title}>{details.title}</h1>
            <div className={classes.smallDetails}>
              <BsStar /> <p>{details.vote}/10</p>
              <p>({details.voteCount})</p>
              <p>{details.releaseDate}</p>
              <p>{details.runtime}</p>
            </div>
            <h2 className={classes.overview}>{details.overview}</h2>
          </div>
          <div className={classes.imageContainer}>
            <img src={details.image} className={classes.image} />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
