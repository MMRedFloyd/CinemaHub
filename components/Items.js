import Item from "./Item";
import classes from "./Items.module.css";

export default function Items() {
  return (
    <>
      <div className={classes.itemsContainer}>
        <Item />
      </div>
    </>
  );
}
