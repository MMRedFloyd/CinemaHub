import ItemId from "../../../components/ItemId";
import { key } from "../../../components/api";

function TvshowDetail(props) {
  return (
    <>
      <ItemId itemData={props} />
    </>
  );
}

export async function getServerSideProps(context) {
  const tvshowId = context.query.tvshowId;

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${tvshowId}?language=en-US&api_key=${key}`
  );

  const data = await response.json();
  console.log(data);
  console.log(data.budget);

  return {
    props: {
      item: {
        id: data.id,
        title: data.original_name || data.name,
        image: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
        poster: `https://image.tmdb.org/t/p/w370_and_h556_bestv2${data.poster_path}`,
        genres: data.genres.map((genre) => genre.name),
        // budget: data.budget,
        languages: data.spoken_languages,
        overview: data.overview,
        releaseDate: data.first_air_date,
        releaseYear: parseInt(data.first_air_date.split("-")[0]),
        // runtime: data.runtime,
        tagline: data.tagline,
        vote: data.vote_average.toFixed(1),
        voteCount: data.vote_count,
      },
    },
  };
}

export default TvshowDetail;
