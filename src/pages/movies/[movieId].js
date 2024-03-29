import ItemId from "../../../components/ItemId";
import { key } from "../../../components/api";

function MovieDetail(props) {
  return (
    <>
      <ItemId itemData={props} />
    </>
  );
}

export async function getServerSideProps(context) {
  const movieId = context.query.movieId;
  console.log(movieId);
  console.log(context.query);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${key}`
  );

  const data = await response.json();
  console.log(data);

  return {
    props: {
      item: {
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
