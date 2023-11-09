import Items from "../../components/Items";
import classes from "../styles/moviesntvshows.module.css";

export default function TvshowsHomePage() {
  return (
    <>
      <h1 className={classes.titlePage}>TV Shows</h1>
      <div>
        <h2 className={classes.sectionTitle}>Trending</h2>
        <Items />
      </div>

      <div>
        <h2 className={classes.sectionTitle}>Upcoming</h2>
        <Items />
      </div>

      <div>
        <h2 className={classes.sectionTitle}>Top Rated</h2>
        <Items />
      </div>
    </>
  );
}
