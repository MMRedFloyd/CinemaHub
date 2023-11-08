import classes from "./HomePageComponent.module.css";
import movieImage from "../public/movieimage.jpg";
import Image from "next/image";

function HomePageComponent() {
  return (
    <>
      <h1 className={classes.welcome}>CinemaHub</h1>
      <div className={classes.mntContainer}>
        <h2 className={classes.sectionTitle}>Movies</h2>
        <div>
          <div>
            <div className={classes.imageContainer}>
              <Image src={movieImage} className={classes.image} alt="" />
            </div>
            <div className={classes.contentContainer}>
              <h2 className={classes.title}>Batman</h2>
              <ul>
                <li>Drama</li>
                <li>Mistery</li>
                <li>Action</li>
              </ul>
              <p>1:24</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.mntContainer}>
        <h2 className={classes.sectionTitle}>TV Shows</h2>
      </div>

      <div className={classes.newsContainer}>
        <h2 className={classes.sectionTitle}>News</h2>
      </div>
    </>
  );
}

export default HomePageComponent;
