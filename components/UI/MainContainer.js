import classes from "./MainContainer.module.css";

export default function MainContainer(props) {
  return (
    <>
      <div className={classes.mainDiv}>{props.children}</div>
    </>
  );
}
