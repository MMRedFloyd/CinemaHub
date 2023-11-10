import Item from "./Item";
import classes from "./Items.module.css";

export default function Items({ data }) {
  return (
    <>
      <div className={classes.itemsContainer}>
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
