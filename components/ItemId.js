import ItemDetails from "../components/ItemDetails";

function ItemId(props) {
  const runtime = props.itemData.item.runtime;
  const runtimeHours = Math.floor(runtime / 60);
  const runtimeMinutes = runtime % 60;

  return (
    <>
      <ItemDetails
        id={props.itemData.item.id}
        title={props.itemData.item.title}
        image={props.itemData.item.image}
        poster={props.itemData.item.poster}
        genres={props.itemData.item.genres}
        budget={props.itemData.item.budget}
        languages={props.itemData.item.languages}
        overview={props.itemData.item.overview}
        releaseDate={props.itemData.item.releaseDate}
        releaseYear={props.itemData.item.releaseYear}
        runtime={props.itemData.item.runtime}
        runtimeHours={runtimeHours}
        runtimeMinutes={runtimeMinutes}
        tagline={props.itemData.item.tagline}
        vote={props.itemData.item.vote}
        voteCount={props.itemData.item.voteCount}
      />
    </>
  );
}

export default ItemId;
