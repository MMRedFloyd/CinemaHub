import Item from "./Item";
import classes from "./Items.module.css";

export default function Items({ movies }) {
  console.log(movies);
  return (
    <>
      <div className={classes.itemsContainer}>
        {/* {movies.map((item) => {
          <Item key={item.id} item={item} />;
        })} */}
      </div>
    </>
  );
}
