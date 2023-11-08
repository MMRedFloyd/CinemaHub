import Link from "next/link";
import classes from "./NavigationBar.module.css";
import logo from "../public/logo.png";
import Image from "next/image";

function NavigationBar() {
  return (
    <>
      <div className={classes.navigationBar}>
        <div className={classes.linksContainer}>
          <Link href="home">Home</Link>
          <Link href="movies">Movies</Link>
          <Link href="tvshows">TV Shows</Link>
          <Link href="news">News</Link>
          <Link href="loop">Loop</Link>
        </div>
        <div className={classes.imageContainer}>
          <Link href="/">
            <Image src={logo} className={classes.image} alt="CinemaHub" />
          </Link>
        </div>
        <div className={classes.btnContainer}>
          <button className={classes.btnLogin}>Log in</button>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
