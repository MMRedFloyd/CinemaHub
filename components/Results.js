import Item from "./Item";
import classes from "./Results.module.css";

function Results({ data }) {
  return (
    <>
      <div className={classes.resultsContainer}>
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Results;
