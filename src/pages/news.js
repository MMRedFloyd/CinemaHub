import { useEffect, useState } from "react";
import classes from "../styles/ItemDetails.module.css";
import { key } from "../../components/api";
import { BsStar } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../store/global-slice";

export default function ItemDetails() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.global.loading);
  const id = "872585";

  useEffect(() => {
    async function fetchItemDetails() {
      setLoading(true);
      // dispatch(globalActions.setLoading(true));
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${key}`
      );
      // console.log(loading);
      const data = await response.json();
      console.log(data);
      const transformedDetails = {
        id: data.id,
        title: data.original_title || data.title,
        image: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
        poster: `https://image.tmdb.org/t/p/original${data.poster_path}`,
        genres: data.genres.map((genre) => genre.name),
        budget: data.budget,
        languages: data.spoken_languages,
        overview: data.overview,
        releaseDate: data.release_date,
        releaseYear: parseInt(data.release_date.split("-")[0]),
        runtime: data.runtime,
        tagline: data.tagline,
        vote: data.vote_average.toFixed(1),
        voteCount: data.vote_count,
      };

      const runtimeInMinutes = transformedDetails.runtime;
      transformedDetails.runtimeHours = Math.floor(runtimeInMinutes / 60);
      transformedDetails.runtimeMinutes = runtimeInMinutes % 60;

      setDetails(transformedDetails);
      // dispatch(globalActions.setLoading(false));
      setLoading(false);
    }
    fetchItemDetails();
    // console.log(details.genres.map((genre) => genre));
    console.log(details.genres);
    console.log(Array.isArray(details.genres));
    console.log(details.budget);
    // console.log(loading);
  }, []);

  console.log(details);
  if (loading) {
    // If details is not yet set, you can choose to render a loading state or return null
    return <p>Loading...</p>;
  }

  // if (details.length == 0) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <div className={classes.detailsContainer}>
        <div className={classes.header}>
          <div className={classes.imageContainer}>
            <img
              src={details.image}
              alt={details.title}
              className={classes.image}
            />
            <h1 className={classes.title}>{details.title}</h1>
          </div>
        </div>

        <div className={classes.smallDetails}>
          <div className={classes.genres}>
            {/* {details.genres.map((genre) => (
              <p className={classes.genre} key={genre}>
                {genre}
              </p>
            ))} */}
            {details.genres ? (
              details.genres.map((genre) => (
                <p className={classes.genre} key={genre}>
                  {genre}
                </p>
              ))
            ) : (
              <p>Loading genres...</p>
            )}
            <div></div>
          </div>

          <p>{details.releaseYear}</p>

          <div className={classes.segment}>
            <LuClock3 className={classes.clockIcon} />
            {details.runtimeHours}h {details.runtimeMinutes}min
          </div>

          <div className={classes.segment}>
            <BsStar className={classes.starIcon} />
            <p>{details.vote}/10</p>
            <p>({details.voteCount})</p>
          </div>
        </div>

        <div className={classes.coreDetails}>
          <div className={classes.posterContainer}>
            <img
              src={details.poster}
              alt={details.title}
              className={classes.poster}
            />
          </div>
          <div className={classes.storylineContainer}>
            <h1 className={classes.storyline}>Storyline</h1>
            <p className={classes.overview}>{details.overview}</p>

            <div className={classes.stats}>
              <table>
                {details && (
                  <>
                    <tr className={classes.listFlex}>
                      <th className={classes.item}>Released</th>
                      <td className={classes.value}>
                        {new Date(details.releaseDate)
                          .toLocaleDateString("en-UK")
                          .replace(/\//g, "-")}
                      </td>
                    </tr>

                    <tr className={classes.listFlex}>
                      <th className={classes.item}>Runtime</th>
                      <td className={classes.value}>
                        {details.runtimeHours}h {details.runtimeMinutes}min
                      </td>
                    </tr>

                    <tr className={classes.listFlex}>
                      <th className={classes.item}>Director</th>
                      <td className={classes.value}>{details.releaseDate}</td>
                    </tr>

                    <tr className={classes.listFlex}>
                      <th className={classes.item}>Budget</th>
                      <td className={classes.value}>
                        {/* ${details.budget.toLocaleString("en-US")} */}
                        {details.budget
                          ? `$${Number(details.budget).toLocaleString("en-US")}`
                          : "Not available"}
                        {/* {details.budget} */}
                      </td>
                    </tr>

                    <tr className={classes.listFlex}>
                      <th className={classes.item}>Genres</th>
                      <td className={classes.value}>
                        {/* {details.genres.join(", ")} */}
                        {details.genres ? (
                          details.genres.join(", ")
                        ) : (
                          <p>Loading genres...</p>
                        )}
                      </td>
                    </tr>

                    <tr className={classes.listFlex}>
                      <th className={classes.item}>Language</th>
                      <td className={classes.value}>{details.releaseDate}</td>
                    </tr>
                  </>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
