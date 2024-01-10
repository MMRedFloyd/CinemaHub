import ItemDetails from "../../../components/ItemDetails";
import { key } from "../../../components/api";

function MovieDetail(props) {
  console.log(props.movie.genres);
  const runtime = props.movie.runtime;
  const runtimeHours = Math.floor(runtime / 60);
  const runtimeMinutes = runtime % 60;

  return (
    <>
      <ItemDetails
        id={props.movie.id}
        title={props.movie.title}
        image={props.movie.image}
        poster={props.movie.poster}
        genres={props.movie.genres}
        budget={props.movie.budget}
        languages={props.movie.languages}
        overview={props.movie.overview}
        releaseDate={props.movie.releaseDate}
        releaseYear={props.movie.releaseYear}
        runtime={props.movie.runtime}
        runtimeHours={runtimeHours}
        runtimeMinutes={runtimeMinutes}
        tagline={props.movie.tagline}
        vote={props.movie.vote}
        voteCount={props.movie.voteCount}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const movieId = context.query.movieId;
  console.log(movieId);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${key}`
  );

  const data = await response.json();
  console.log(data.genres.map((genre) => genre.name));

  return {
    props: {
      movie: {
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
      },
    },
  };
}

export default MovieDetail;
