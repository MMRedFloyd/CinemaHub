import React from "react";
import NavigationBar from "./NavigationBar";
import classes from "./RootLayout.module.css";

export default function Rootlayout(props) {
  return (
    <>
      <div className={classes.mainFlex}>
        <NavigationBar />
        <div>{props.children}</div>
      </div>
    </>
  );
}
