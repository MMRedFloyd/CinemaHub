import classes from "./HomePageComponent.module.css";

import Items from "./Items";

function HomePageComponent() {
  return (
    <>
      <h1 className={classes.welcome}>CinemaHub</h1>
      <div className={classes.mntContainer}>
        <h2 className={classes.sectionTitle}>Movies</h2>
        <Items />
      </div>

      <div className={classes.mntContainer}>
        <h2 className={classes.sectionTitle}>TV Shows</h2>
        <Items />
      </div>

      <div className={classes.newsContainer}>
        <h2 className={classes.sectionTitle}>News</h2>
      </div>
    </>
  );
}

export default HomePageComponent;
