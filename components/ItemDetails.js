import { useEffect, useState } from "react";
import classes from "./ItemDetails.module.css";
import { key } from "./api";
import { BsStar } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../store/global-slice";

export default function ItemDetails(props) {
  const [loading, setLoading] = useState(false);
  const [table, setTable] = useState(false);
  const [availableRuntime, setAvailableRuntime] = useState(true);
  const [availableBudget, setAvailableBudget] = useState(true);
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.global.loading);
  // const id = "872585";

  useEffect(() => {
    async function fetchItemDetails() {
      setTable(true);
      setLoading(true);
      // dispatch(globalActions.setLoading(true));
      // const response = await fetch(
      //   `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${key}`
      // );
      // // console.log(loading);
      // const data = await response.json();
      // console.log(data);
      // const transformedDetails = {
      //   id: data.id,
      //   title: data.original_title || data.title,
      //   image: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
      //   poster: `https://image.tmdb.org/t/p/original${data.poster_path}`,
      //   genres: data.genres.map((genre) => genre.name),
      //   budget: data.budget,
      //   languages: data.spoken_languages,
      //   overview: data.overview,
      //   releaseDate: data.release_date,
      //   releaseYear: parseInt(data.release_date.split("-")[0]),
      //   runtime: data.runtime,
      //   tagline: data.tagline,
      //   vote: data.vote_average.toFixed(1),
      //   voteCount: data.vote_count,
      // };

      // const runtimeInMinutes = transformedDetails.runtime;
      // transformedDetails.runtimeHours = Math.floor(runtimeInMinutes / 60);
      // transformedDetails.runtimeMinutes = runtimeInMinutes % 60;

      // setDetails(transformedDetails);
      // dispatch(globalActions.setLoading(false));
      setLoading(false);
    }
    fetchItemDetails();
    // console.log(props.genres.map((genre) => genre));

    // console.log(loading);
  }, []);

  if (loading) {
    // If props is not yet set, you can choose to render a loading state or return null
    return <p>Loading...</p>;
  }
  useEffect(() => {
    if (!props.budget) {
      setAvailableBudget(false);
    }

    if (!props.runtime) {
      setAvailableRuntime(false);
    }
  }, []);

  return (
    <>
      <div className={classes.detailsContainer}>
        <div className={classes.header}>
          <div className={classes.imageContainer}>
            <img
              src={props.image}
              alt={props.title}
              className={classes.image}
            />
            <h1 className={classes.title}>{props.title}</h1>
          </div>
        </div>

        <div className={classes.smallDetails}>
          <div className={classes.genres}>
            {/* {props.genres.map((genre) => (
              <p className={classes.genre} key={genre}>
                {genre}
              </p>
            ))} */}
            {props.genres ? (
              props.genres.map((genre) => (
                <p className={classes.genre} key={genre}>
                  {genre}
                </p>
              ))
            ) : (
              <p>Loading genres...</p>
            )}
            <div></div>
          </div>

          <p>{props.releaseYear}</p>

          {availableRuntime && (
            <div className={classes.segment}>
              <LuClock3 className={classes.clockIcon} />
              {props.runtimeHours}h {props.runtimeMinutes}min
            </div>
          )}

          <div className={classes.segment}>
            <BsStar className={classes.starIcon} />
            <p>{props.vote}/10</p>
            <p>({props.voteCount})</p>
          </div>
        </div>

        <div className={classes.coreDetails}>
          <div className={classes.posterContainer}>
            <img
              src={props.poster}
              alt={props.title}
              className={classes.poster}
            />
          </div>
          <div className={classes.storylineContainer}>
            <h1 className={classes.storyline}>Storyline</h1>
            <p className={classes.overview}>{props.overview}</p>

            <div className={classes.stats}>
              {table && (
                <table>
                  {props && (
                    <>
                      <tr className={classes.listFlex}>
                        <th className={classes.item}>Released</th>
                        <td className={classes.value}>
                          {new Date(props.releaseDate)
                            .toLocaleDateString("en-UK")
                            .replace(/\//g, ".")}
                        </td>
                      </tr>

                      {availableRuntime && (
                        <tr className={classes.listFlex}>
                          <th className={classes.item}>Runtime</th>
                          <td className={classes.value}>
                            {props.runtimeHours}h {props.runtimeMinutes}min
                          </td>
                        </tr>
                      )}

                      {/* <tr className={classes.listFlex}>
                        <th className={classes.item}>Director</th>
                        <td className={classes.value}>{props.releaseDate}</td>
                      </tr> */}

                      {availableBudget && (
                        <tr className={classes.listFlex}>
                          <th className={classes.item}>Budget</th>
                          <td className={classes.value}>
                            {/* ${props.budget.toLocaleString("en-US")} */}
                            {props.budget
                              ? `$${Number(props.budget).toLocaleString(
                                  "en-US"
                                )}`
                              : "Not available"}
                            {/* {props.budget} */}
                          </td>
                        </tr>
                      )}

                      <tr className={classes.listFlex}>
                        <th className={classes.item}>Genres</th>
                        <td className={classes.value}>
                          {/* {props.genres.join(", ")} */}
                          {props.genres ? (
                            props.genres.join(", ")
                          ) : (
                            <p>Loading genres...</p>
                          )}
                        </td>
                      </tr>

                      {/* <tr className={classes.listFlex}>
                        <th className={classes.item}>Language</th>
                        <td className={classes.value}>{props.releaseDate}</td>
                      </tr> */}
                    </>
                  )}
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
