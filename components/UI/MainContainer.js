import { useSelector } from "react-redux";
import classes from "./MainContainer.module.css";

export default function MainContainer(props) {
  const isDetailsVisible = useSelector(
    (state) => state.global.isDetailsVisible
  );
  return (
    <>
      <div className={classes.mainDiv}>{props.children}</div>
    </>
  );
}
