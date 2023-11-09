import classes from "./Item.module.css";
import movieImage from "../public/movieimage.jpg";
import Image from "next/image";
import { BiTime } from "react-icons/bi";

export default function Item() {
  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.imageContainer}>
          <Image src={movieImage} className={classes.image} alt="" />
        </div>
        <div className={classes.contentContainer}>
          <h2 className={classes.title}>Batman</h2>
          <div className={classes.genrentime}>
            <ul className={classes.ul}>
              <li>Drama</li>
              <li>Mistery</li>
              <li>Action</li>
            </ul>
            <p className={classes.time}>
              <BiTime className={classes.timeIcon} />
              1:24
            </p>
          </div>
        </div>
      </div>

      <div className={classes.itemContainer}>
        <div className={classes.imageContainer}>
          <Image src={movieImage} className={classes.image} alt="" />
        </div>
        <div className={classes.contentContainer}>
          <h2 className={classes.title}>Batman</h2>
          <div className={classes.genrentime}>
            <ul className={classes.ul}>
              <li>Drama</li>
              <li>Mistery</li>
              <li>Action</li>
            </ul>
            <p className={classes.time}>
              <BiTime className={classes.timeIcon} />
              1:24
            </p>
          </div>
        </div>
      </div>

      <div className={classes.itemContainer}>
        <div className={classes.imageContainer}>
          <Image src={movieImage} className={classes.image} alt="" />
        </div>
        <div className={classes.contentContainer}>
          <h2 className={classes.title}>Batman</h2>
          <div className={classes.genrentime}>
            <ul className={classes.ul}>
              <li>Drama</li>
              <li>Mistery</li>
              <li>Action</li>
            </ul>
            <p className={classes.time}>
              <BiTime className={classes.timeIcon} />
              1:24
            </p>
          </div>
        </div>
      </div>

      <div className={classes.itemContainer}>
        <div className={classes.imageContainer}>
          <Image src={movieImage} className={classes.image} alt="" />
        </div>
        <div className={classes.contentContainer}>
          <h2 className={classes.title}>Batman</h2>
          <div className={classes.genrentime}>
            <ul className={classes.ul}>
              <li>Drama</li>
              <li>Mistery</li>
              <li>Action</li>
            </ul>
            <p className={classes.time}>
              <BiTime className={classes.timeIcon} />
              1:24
            </p>
          </div>
        </div>
      </div>

      <div className={classes.itemContainer}>
        <div className={classes.imageContainer}>
          <Image src={movieImage} className={classes.image} alt="" />
        </div>
        <div className={classes.contentContainer}>
          <h2 className={classes.title}>Batman</h2>
          <div className={classes.genrentime}>
            <ul className={classes.ul}>
              <li>Drama</li>
              <li>Mistery</li>
              <li>Action</li>
            </ul>
            <p className={classes.time}>
              <BiTime className={classes.timeIcon} />
              1:24
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
