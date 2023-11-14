import Link from "next/link";
import classes from "./NavigationBar.module.css";
import logo from "../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

function NavigationBar() {
  const router = useRouter();

  return (
    <>
      <div className={classes.navigationBar}>
        <div className={classes.linksContainer}>
          <div className={router.pathname === "/" ? classes.bgMelt : ""}>
            <Link className={classes.link} href="/">
              Home
            </Link>
          </div>

          <div
            className={
              router.pathname.startsWith("/movies") ? classes.bgMelt : ""
            }
          >
            <Link className={classes.link} href="/movies">
              Movies
            </Link>
          </div>

          <div
            className={
              router.pathname.startsWith("/tvshows") ? classes.bgMelt : ""
            }
          >
            <Link className={classes.link} href="/tvshows">
              TV Shows
            </Link>
          </div>

          <div
            className={
              router.pathname.startsWith("/news") ? classes.bgMelt : ""
            }
          >
            <Link className={classes.link} href="/news">
              News
            </Link>
          </div>
          <div
            className={
              router.pathname.startsWith("/loop") ? classes.bgMelt : ""
            }
          >
            <Link className={classes.link} href="/loop">
              Loop
            </Link>
          </div>
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
