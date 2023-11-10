import classes from "./Item.module.css";
import { BsStar } from "react-icons/bs";

export default function Item({ item }) {
  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.imageContainer}>
          <img src={item.image} className={classes.image} alt="" />
        </div>
        <div className={classes.contentContainer}>
          <h2 className={classes.title}>{item.title}</h2>
          <div className={classes.genrentime}>
            <BsStar className={classes.starIcon} /> <p>{item.vote}/10</p>
            <p>({item.voteCount})</p>
          </div>
        </div>
      </div>
    </>
  );
}
